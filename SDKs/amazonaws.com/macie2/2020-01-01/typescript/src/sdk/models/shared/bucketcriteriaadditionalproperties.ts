import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BucketCriteriaAdditionalProperties
/** 
 * Specifies the operator to use in a property-based condition that filters the results of a query for information about S3 buckets.
**/
export class BucketCriteriaAdditionalProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=eq" })
  eq?: string[];

  @Metadata({ data: "json, name=gt" })
  gt?: number;

  @Metadata({ data: "json, name=gte" })
  gte?: number;

  @Metadata({ data: "json, name=lt" })
  lt?: number;

  @Metadata({ data: "json, name=lte" })
  lte?: number;

  @Metadata({ data: "json, name=neq" })
  neq?: string[];

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;
}
