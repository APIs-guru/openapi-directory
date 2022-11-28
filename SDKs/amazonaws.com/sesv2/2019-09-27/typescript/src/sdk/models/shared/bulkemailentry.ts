import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { ReplacementEmailContent } from "./replacementemailcontent";
import { MessageTag } from "./messagetag";



export class BulkEmailEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Destination" })
  destination: Destination;

  @SpeakeasyMetadata({ data: "json, name=ReplacementEmailContent" })
  replacementEmailContent?: ReplacementEmailContent;

  @SpeakeasyMetadata({ data: "json, name=ReplacementTags", elemType: MessageTag })
  replacementTags?: MessageTag[];
}
