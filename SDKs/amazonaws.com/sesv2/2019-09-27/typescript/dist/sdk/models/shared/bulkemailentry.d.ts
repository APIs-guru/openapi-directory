import { SpeakeasyBase } from "../../../internal/utils";
import { Destination } from "./destination";
import { ReplacementEmailContent } from "./replacementemailcontent";
import { MessageTag } from "./messagetag";
export declare class BulkEmailEntry extends SpeakeasyBase {
    destination: Destination;
    replacementEmailContent?: ReplacementEmailContent;
    replacementTags?: MessageTag[];
}
