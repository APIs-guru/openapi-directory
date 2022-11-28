import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResultRowValue
/** 
 * Provides a single value and metadata about that value as part of an array of query results for a standard metric that applies to an application, campaign, or journey.
**/
export class ResultRowValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: string;
}
