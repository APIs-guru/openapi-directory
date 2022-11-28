import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A list of configuration sets in your Amazon Pinpoint account in the current AWS Region.
**/
export declare class ListConfigurationSetsResponse extends SpeakeasyBase {
    configurationSets?: string[];
    nextToken?: string;
}
