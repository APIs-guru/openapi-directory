import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilterExpression } from "./filterexpression";



// FilterAdvancedDetails
/** 
 * Details for the filter of the type ADVANCED.
**/
export class FilterAdvancedDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extractA" })
  extractA?: string;

  @SpeakeasyMetadata({ data: "json, name=extractB" })
  extractB?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldA" })
  fieldA?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldAIndex" })
  fieldAIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=fieldARequired" })
  fieldARequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fieldB" })
  fieldB?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldBIndex" })
  fieldBIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=fieldBRequired" })
  fieldBRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=outputConstructor" })
  outputConstructor?: string;

  @SpeakeasyMetadata({ data: "json, name=outputToField" })
  outputToField?: string;

  @SpeakeasyMetadata({ data: "json, name=outputToFieldIndex" })
  outputToFieldIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=overrideOutputField" })
  overrideOutputField?: boolean;
}


// FilterLowercaseDetails
/** 
 * Details for the filter of the type LOWER.
**/
export class FilterLowercaseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldIndex" })
  fieldIndex?: number;
}


// FilterParentLink
/** 
 * Parent link for this filter. Points to the account to which this filter belongs.
**/
export class FilterParentLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// FilterSearchAndReplaceDetails
/** 
 * Details for the filter of the type SEARCH_AND_REPLACE.
**/
export class FilterSearchAndReplaceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldIndex" })
  fieldIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=replaceString" })
  replaceString?: string;

  @SpeakeasyMetadata({ data: "json, name=searchString" })
  searchString?: string;
}


// FilterUppercaseDetails
/** 
 * Details for the filter of the type UPPER.
**/
export class FilterUppercaseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldIndex" })
  fieldIndex?: number;
}


// FilterInput
/** 
 * JSON template for an Analytics account filter.
**/
export class FilterInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=advancedDetails" })
  advancedDetails?: FilterAdvancedDetails;

  @SpeakeasyMetadata({ data: "json, name=excludeDetails" })
  excludeDetails?: FilterExpression;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=includeDetails" })
  includeDetails?: FilterExpression;

  @SpeakeasyMetadata({ data: "json, name=lowercaseDetails" })
  lowercaseDetails?: FilterLowercaseDetails;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentLink" })
  parentLink?: FilterParentLink;

  @SpeakeasyMetadata({ data: "json, name=searchAndReplaceDetails" })
  searchAndReplaceDetails?: FilterSearchAndReplaceDetails;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uppercaseDetails" })
  uppercaseDetails?: FilterUppercaseDetails;
}


// Filter
/** 
 * JSON template for an Analytics account filter.
**/
export class Filter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=advancedDetails" })
  advancedDetails?: FilterAdvancedDetails;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=excludeDetails" })
  excludeDetails?: FilterExpression;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=includeDetails" })
  includeDetails?: FilterExpression;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lowercaseDetails" })
  lowercaseDetails?: FilterLowercaseDetails;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parentLink" })
  parentLink?: FilterParentLink;

  @SpeakeasyMetadata({ data: "json, name=searchAndReplaceDetails" })
  searchAndReplaceDetails?: FilterSearchAndReplaceDetails;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;

  @SpeakeasyMetadata({ data: "json, name=uppercaseDetails" })
  uppercaseDetails?: FilterUppercaseDetails;
}
