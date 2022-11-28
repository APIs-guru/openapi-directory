import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BigQuerySource
/** 
 * The BigQuery location for the input content.
**/
export class BigQuerySource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputUri" })
  inputUri?: string;
}
