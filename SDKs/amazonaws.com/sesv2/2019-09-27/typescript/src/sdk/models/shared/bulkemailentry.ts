import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Destination } from "./destination";
import { ReplacementEmailContent } from "./replacementemailcontent";
import { MessageTag } from "./messagetag";


export class BulkEmailEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=Destination" })
  destination: Destination;

  @Metadata({ data: "json, name=ReplacementEmailContent" })
  replacementEmailContent?: ReplacementEmailContent;

  @Metadata({ data: "json, name=ReplacementTags", elemType: shared.MessageTag })
  replacementTags?: MessageTag[];
}
