import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BucketCriteriaAdditionalProperties
/** 
 * Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.
**/
export class BucketCriteriaAdditionalProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eq" })
  eq?: string[];

  @SpeakeasyMetadata({ data: "json, name=gt" })
  gt?: number;

  @SpeakeasyMetadata({ data: "json, name=gte" })
  gte?: number;

  @SpeakeasyMetadata({ data: "json, name=lt" })
  lt?: number;

  @SpeakeasyMetadata({ data: "json, name=lte" })
  lte?: number;

  @SpeakeasyMetadata({ data: "json, name=neq" })
  neq?: string[];

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;
}
