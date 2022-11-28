import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeDealAssociation } from "./creativedealassociation";
/**
 * A request for removing the association between a deal and a creative.
**/
export declare class RemoveDealAssociationRequest extends SpeakeasyBase {
    association?: CreativeDealAssociation;
}
