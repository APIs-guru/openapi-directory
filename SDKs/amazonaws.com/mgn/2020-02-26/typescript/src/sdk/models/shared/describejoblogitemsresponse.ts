import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobLog } from "./joblog";


export class DescribeJobLogItemsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.JobLog })
  items?: JobLog[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
