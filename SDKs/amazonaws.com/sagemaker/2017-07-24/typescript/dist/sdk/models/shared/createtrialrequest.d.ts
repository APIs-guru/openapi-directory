import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataProperties } from "./metadataproperties";
import { Tag } from "./tag";
export declare class CreateTrialRequest extends SpeakeasyBase {
    displayName?: string;
    experimentName: string;
    metadataProperties?: MetadataProperties;
    tags?: Tag[];
    trialName: string;
}
