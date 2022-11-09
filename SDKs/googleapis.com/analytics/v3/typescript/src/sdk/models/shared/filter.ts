import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FilterExpression } from "./filterexpression";
import { FilterExpression } from "./filterexpression";


// FilterAdvancedDetails
/** 
 * Details for the filter of the type ADVANCED.
**/
export class FilterAdvancedDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=extractA" })
  extractA?: string;

  @Metadata({ data: "json, name=extractB" })
  extractB?: string;

  @Metadata({ data: "json, name=fieldA" })
  fieldA?: string;

  @Metadata({ data: "json, name=fieldAIndex" })
  fieldAIndex?: number;

  @Metadata({ data: "json, name=fieldARequired" })
  fieldARequired?: boolean;

  @Metadata({ data: "json, name=fieldB" })
  fieldB?: string;

  @Metadata({ data: "json, name=fieldBIndex" })
  fieldBIndex?: number;

  @Metadata({ data: "json, name=fieldBRequired" })
  fieldBRequired?: boolean;

  @Metadata({ data: "json, name=outputConstructor" })
  outputConstructor?: string;

  @Metadata({ data: "json, name=outputToField" })
  outputToField?: string;

  @Metadata({ data: "json, name=outputToFieldIndex" })
  outputToFieldIndex?: number;

  @Metadata({ data: "json, name=overrideOutputField" })
  overrideOutputField?: boolean;
}


// FilterLowercaseDetails
/** 
 * Details for the filter of the type LOWER.
**/
export class FilterLowercaseDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=fieldIndex" })
  fieldIndex?: number;
}


// FilterParentLink
/** 
 * Parent link for this filter. Points to the account to which this filter belongs.
**/
export class FilterParentLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


// FilterSearchAndReplaceDetails
/** 
 * Details for the filter of the type SEARCH_AND_REPLACE.
**/
export class FilterSearchAndReplaceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=caseSensitive" })
  caseSensitive?: boolean;

  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=fieldIndex" })
  fieldIndex?: number;

  @Metadata({ data: "json, name=replaceString" })
  replaceString?: string;

  @Metadata({ data: "json, name=searchString" })
  searchString?: string;
}


// FilterUppercaseDetails
/** 
 * Details for the filter of the type UPPER.
**/
export class FilterUppercaseDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=fieldIndex" })
  fieldIndex?: number;
}


// Filter
/** 
 * JSON template for an Analytics account filter.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=advancedDetails" })
  advancedDetails?: FilterAdvancedDetails;

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=excludeDetails" })
  excludeDetails?: FilterExpression;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=includeDetails" })
  includeDetails?: FilterExpression;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lowercaseDetails" })
  lowercaseDetails?: FilterLowercaseDetails;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parentLink" })
  parentLink?: FilterParentLink;

  @Metadata({ data: "json, name=searchAndReplaceDetails" })
  searchAndReplaceDetails?: FilterSearchAndReplaceDetails;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;

  @Metadata({ data: "json, name=uppercaseDetails" })
  uppercaseDetails?: FilterUppercaseDetails;
}
