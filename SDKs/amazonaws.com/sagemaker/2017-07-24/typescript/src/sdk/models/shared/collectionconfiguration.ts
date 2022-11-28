import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CollectionConfiguration
/** 
 * Configuration information for the Debugger output tensor collections.
**/
export class CollectionConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CollectionName" })
  collectionName?: string;

  @SpeakeasyMetadata({ data: "json, name=CollectionParameters" })
  collectionParameters?: Map<string, string>;
}
