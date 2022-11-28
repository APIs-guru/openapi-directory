import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationEdgeTypeEnum } from "./associationedgetypeenum";
import { SortAssociationsByEnum } from "./sortassociationsbyenum";
import { SortOrderEnum } from "./sortorderenum";
export declare class ListAssociationsRequest extends SpeakeasyBase {
    associationType?: AssociationEdgeTypeEnum;
    createdAfter?: Date;
    createdBefore?: Date;
    destinationArn?: string;
    destinationType?: string;
    maxResults?: number;
    nextToken?: string;
    sortBy?: SortAssociationsByEnum;
    sortOrder?: SortOrderEnum;
    sourceArn?: string;
    sourceType?: string;
}
