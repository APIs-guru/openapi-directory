import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListConfigurationSetsResponse
/** 
 * A list of configuration sets in your Amazon SES account in the current AWS Region.
**/
export class ListConfigurationSetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationSets" })
  configurationSets?: string[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
