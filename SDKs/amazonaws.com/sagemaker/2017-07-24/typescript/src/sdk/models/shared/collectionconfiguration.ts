import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CollectionConfiguration
/** 
 * Configuration information for the Debugger output tensor collections.
**/
export class CollectionConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=CollectionName" })
  collectionName?: string;

  @Metadata({ data: "json, name=CollectionParameters" })
  collectionParameters?: Map<string, string>;
}
