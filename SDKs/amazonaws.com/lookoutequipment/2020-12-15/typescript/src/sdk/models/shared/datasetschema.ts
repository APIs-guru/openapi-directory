import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatasetSchema
/** 
 * Provides information about the data schema used with the given dataset. 
**/
export class DatasetSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=InlineDataSchema" })
  inlineDataSchema?: string;
}
