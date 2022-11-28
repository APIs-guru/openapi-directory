import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobLog } from "./joblog";



export class DescribeJobLogItemsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: JobLog })
  items?: JobLog[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
