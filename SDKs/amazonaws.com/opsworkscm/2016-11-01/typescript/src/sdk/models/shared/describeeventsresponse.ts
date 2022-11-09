import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServerEvent } from "./serverevent";


export class DescribeEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ServerEvents", elemType: shared.ServerEvent })
  serverEvents?: ServerEvent[];
}
