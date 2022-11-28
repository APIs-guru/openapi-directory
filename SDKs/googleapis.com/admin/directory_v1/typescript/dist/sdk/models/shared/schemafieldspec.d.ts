import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.
**/
export declare class SchemaFieldSpecNumericIndexingSpec extends SpeakeasyBase {
    maxValue?: number;
    minValue?: number;
}
/**
 * You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).
**/
export declare class SchemaFieldSpec extends SpeakeasyBase {
    displayName?: string;
    etag?: string;
    fieldId?: string;
    fieldName?: string;
    fieldType?: string;
    indexed?: boolean;
    kind?: string;
    multiValued?: boolean;
    numericIndexingSpec?: SchemaFieldSpecNumericIndexingSpec;
    readAccessType?: string;
}
