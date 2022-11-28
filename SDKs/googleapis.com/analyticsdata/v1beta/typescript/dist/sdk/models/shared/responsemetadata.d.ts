import { SpeakeasyBase } from "../../../internal/utils";
import { SchemaRestrictionResponse } from "./schemarestrictionresponse";
/**
 * Response's metadata carrying additional information about the report content.
**/
export declare class ResponseMetaData extends SpeakeasyBase {
    currencyCode?: string;
    dataLossFromOtherRow?: boolean;
    emptyReason?: string;
    schemaRestrictionResponse?: SchemaRestrictionResponse;
    subjectToThresholding?: boolean;
    timeZone?: string;
}
