import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { TrialSource } from "./trialsource";
import { Tag } from "./tag";
import { TrialComponentSimpleSummary } from "./trialcomponentsimplesummary";
/**
 * The properties of a trial as returned by the <a>Search</a> API.
**/
export declare class Trial extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    displayName?: string;
    experimentName?: string;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    metadataProperties?: MetadataProperties;
    source?: TrialSource;
    tags?: Tag[];
    trialArn?: string;
    trialComponentSummaries?: TrialComponentSimpleSummary[];
    trialName?: string;
}
