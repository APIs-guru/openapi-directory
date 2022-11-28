import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatasetSchema
/** 
 * Provides information about the data schema used with the given dataset. 
**/
export class DatasetSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InlineDataSchema" })
  inlineDataSchema?: string;
}
