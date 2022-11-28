import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Session } from "./session";



export class DescribeSessionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Sessions", elemType: Session })
  sessions?: Session[];
}
