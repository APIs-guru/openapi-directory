import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerEvent } from "./serverevent";



export class DescribeEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerEvents", elemType: ServerEvent })
  serverEvents?: ServerEvent[];
}
