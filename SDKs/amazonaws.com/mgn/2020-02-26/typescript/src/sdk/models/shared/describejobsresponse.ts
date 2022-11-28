import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";



export class DescribeJobsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Job })
  items?: Job[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
