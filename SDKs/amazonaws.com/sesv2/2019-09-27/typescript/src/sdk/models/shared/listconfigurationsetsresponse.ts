import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListConfigurationSetsResponse
/** 
 * A list of configuration sets in your Amazon SES account in the current AWS Region.
**/
export class ListConfigurationSetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConfigurationSets" })
  configurationSets?: string[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
