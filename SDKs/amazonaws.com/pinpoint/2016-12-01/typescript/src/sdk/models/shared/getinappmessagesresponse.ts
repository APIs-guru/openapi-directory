import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InAppMessagesResponse } from "./inappmessagesresponse";


export class GetInAppMessagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InAppMessagesResponse" })
  inAppMessagesResponse: InAppMessagesResponse;
}
