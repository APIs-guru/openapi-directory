import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationFilter } from "./associationfilter";
export declare class ListAssociationsRequest extends SpeakeasyBase {
    associationFilterList?: AssociationFilter[];
    maxResults?: number;
    nextToken?: string;
}
