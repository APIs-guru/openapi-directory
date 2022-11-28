import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationSummary } from "./associationsummary";
export declare class ListAssociationsResponse extends SpeakeasyBase {
    associationSummaries?: AssociationSummary[];
    nextToken?: string;
}
