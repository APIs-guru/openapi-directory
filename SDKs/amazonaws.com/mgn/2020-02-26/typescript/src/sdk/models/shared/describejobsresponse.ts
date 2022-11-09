import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Job } from "./job";


export class DescribeJobsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Job })
  items?: Job[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
