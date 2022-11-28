import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { TrialSource } from "./trialsource";
export declare class DescribeTrialResponse extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    displayName?: string;
    experimentName?: string;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    metadataProperties?: MetadataProperties;
    source?: TrialSource;
    trialArn?: string;
    trialName?: string;
}
