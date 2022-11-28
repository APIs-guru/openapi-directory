import { SpeakeasyBase } from "../../../internal/utils";
import { DateDetails } from "./datedetails";
import { LabeledItem } from "./labeleditem";
import { LookupDetails } from "./lookupdetails";
import { RelationshipDetails } from "./relationshipdetails";
/**
 * Details on a column in the table.
**/
export declare class ColumnDescription extends SpeakeasyBase {
    dataType?: string;
    dateDetails?: DateDetails;
    id?: string;
    labels?: LabeledItem[];
    lookupDetails?: LookupDetails;
    multipleValuesDisallowed?: boolean;
    name?: string;
    readonly?: boolean;
    relationshipDetails?: RelationshipDetails;
}
