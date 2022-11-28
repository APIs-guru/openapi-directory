import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BigQueryDestination
/** 
 * The BigQuery location for the output content.
**/
export class BigQueryDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=outputUri" })
  outputUri?: string;
}
