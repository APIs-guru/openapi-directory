import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListConfigurationSetsResponse
/** 
 * An object that contains information about the configuration sets for your account in the current region.
**/
export class ListConfigurationSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationSets" })
  configurationSets?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
