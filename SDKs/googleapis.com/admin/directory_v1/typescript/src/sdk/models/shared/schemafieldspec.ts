import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SchemaFieldSpecNumericIndexingSpec
/** 
 * Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.
**/
export class SchemaFieldSpecNumericIndexingSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;
}


// SchemaFieldSpec
/** 
 * You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).
**/
export class SchemaFieldSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @SpeakeasyMetadata({ data: "json, name=fieldType" })
  fieldType?: string;

  @SpeakeasyMetadata({ data: "json, name=indexed" })
  indexed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=multiValued" })
  multiValued?: boolean;

  @SpeakeasyMetadata({ data: "json, name=numericIndexingSpec" })
  numericIndexingSpec?: SchemaFieldSpecNumericIndexingSpec;

  @SpeakeasyMetadata({ data: "json, name=readAccessType" })
  readAccessType?: string;
}
