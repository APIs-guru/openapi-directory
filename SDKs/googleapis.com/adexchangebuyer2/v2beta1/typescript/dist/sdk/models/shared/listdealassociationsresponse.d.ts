import { SpeakeasyBase } from "../../../internal/utils";
import { CreativeDealAssociation } from "./creativedealassociation";
/**
 * A response for listing creative and deal associations
**/
export declare class ListDealAssociationsResponse extends SpeakeasyBase {
    associations?: CreativeDealAssociation[];
    nextPageToken?: string;
}
