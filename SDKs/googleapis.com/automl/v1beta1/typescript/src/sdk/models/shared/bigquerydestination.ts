import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BigQueryDestination
/** 
 * The BigQuery location for the output content.
**/
export class BigQueryDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=outputUri" })
  outputUri?: string;
}
