import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResultRowValue
/** 
 * Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey.
**/
export class ResultRowValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Type" })
  type: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}
