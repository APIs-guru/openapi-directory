import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BigQuerySource
/** 
 * The BigQuery location for the input content.
**/
export class BigQuerySource extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputUri" })
  inputUri?: string;
}
