import { SpeakeasyBase } from "../../../internal/utils";
import { ItemIdentifier } from "./itemidentifier";
/**
 * Resources that responders use to triage and mitigate the incident.
**/
export declare class RelatedItem extends SpeakeasyBase {
    identifier: ItemIdentifier;
    title?: string;
}
