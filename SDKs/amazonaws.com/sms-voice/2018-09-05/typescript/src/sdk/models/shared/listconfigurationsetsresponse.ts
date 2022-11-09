import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListConfigurationSetsResponse
/** 
 * An object that contains information about the configuration sets for your account in the current region.
**/
export class ListConfigurationSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationSets" })
  configurationSets?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
