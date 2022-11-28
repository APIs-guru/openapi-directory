import { SpeakeasyBase } from "../../../internal/utils";
import { FilterExpression } from "./filterexpression";
/**
 * Details for the filter of the type ADVANCED.
**/
export declare class FilterAdvancedDetails extends SpeakeasyBase {
    caseSensitive?: boolean;
    extractA?: string;
    extractB?: string;
    fieldA?: string;
    fieldAIndex?: number;
    fieldARequired?: boolean;
    fieldB?: string;
    fieldBIndex?: number;
    fieldBRequired?: boolean;
    outputConstructor?: string;
    outputToField?: string;
    outputToFieldIndex?: number;
    overrideOutputField?: boolean;
}
/**
 * Details for the filter of the type LOWER.
**/
export declare class FilterLowercaseDetails extends SpeakeasyBase {
    field?: string;
    fieldIndex?: number;
}
/**
 * Parent link for this filter. Points to the account to which this filter belongs.
**/
export declare class FilterParentLink extends SpeakeasyBase {
    href?: string;
    type?: string;
}
/**
 * Details for the filter of the type SEARCH_AND_REPLACE.
**/
export declare class FilterSearchAndReplaceDetails extends SpeakeasyBase {
    caseSensitive?: boolean;
    field?: string;
    fieldIndex?: number;
    replaceString?: string;
    searchString?: string;
}
/**
 * Details for the filter of the type UPPER.
**/
export declare class FilterUppercaseDetails extends SpeakeasyBase {
    field?: string;
    fieldIndex?: number;
}
/**
 * JSON template for an Analytics account filter.
**/
export declare class FilterInput extends SpeakeasyBase {
    accountId?: string;
    advancedDetails?: FilterAdvancedDetails;
    excludeDetails?: FilterExpression;
    id?: string;
    includeDetails?: FilterExpression;
    lowercaseDetails?: FilterLowercaseDetails;
    name?: string;
    parentLink?: FilterParentLink;
    searchAndReplaceDetails?: FilterSearchAndReplaceDetails;
    type?: string;
    uppercaseDetails?: FilterUppercaseDetails;
}
/**
 * JSON template for an Analytics account filter.
**/
export declare class Filter extends SpeakeasyBase {
    accountId?: string;
    advancedDetails?: FilterAdvancedDetails;
    created?: Date;
    excludeDetails?: FilterExpression;
    id?: string;
    includeDetails?: FilterExpression;
    kind?: string;
    lowercaseDetails?: FilterLowercaseDetails;
    name?: string;
    parentLink?: FilterParentLink;
    searchAndReplaceDetails?: FilterSearchAndReplaceDetails;
    selfLink?: string;
    type?: string;
    updated?: Date;
    uppercaseDetails?: FilterUppercaseDetails;
}
