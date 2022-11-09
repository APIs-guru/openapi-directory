import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SchemaFieldSpecNumericIndexingSpec
/** 
 * Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.
**/
export class SchemaFieldSpecNumericIndexingSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=minValue" })
  minValue?: number;
}


// SchemaFieldSpec
/** 
 * You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).
**/
export class SchemaFieldSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=fieldId" })
  fieldId?: string;

  @Metadata({ data: "json, name=fieldName" })
  fieldName?: string;

  @Metadata({ data: "json, name=fieldType" })
  fieldType?: string;

  @Metadata({ data: "json, name=indexed" })
  indexed?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=multiValued" })
  multiValued?: boolean;

  @Metadata({ data: "json, name=numericIndexingSpec" })
  numericIndexingSpec?: SchemaFieldSpecNumericIndexingSpec;

  @Metadata({ data: "json, name=readAccessType" })
  readAccessType?: string;
}
