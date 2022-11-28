import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object that contains information about the configuration sets for your account in the current region.
**/
export declare class ListConfigurationSetsResponse extends SpeakeasyBase {
    configurationSets?: string[];
    nextToken?: string;
}
