import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { MetadataProperties } from "./metadataproperties";
import { TrialComponentMetricSummary } from "./trialcomponentmetricsummary";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { Parent } from "./parent";
import { TrialComponentSource } from "./trialcomponentsource";
import { TrialComponentSourceDetail } from "./trialcomponentsourcedetail";
import { TrialComponentStatus } from "./trialcomponentstatus";
import { Tag } from "./tag";
/**
 * The properties of a trial component as returned by the <a>Search</a> API.
**/
export declare class TrialComponent extends SpeakeasyBase {
    createdBy?: UserContext;
    creationTime?: Date;
    displayName?: string;
    endTime?: Date;
    inputArtifacts?: Map<string, TrialComponentArtifact>;
    lastModifiedBy?: UserContext;
    lastModifiedTime?: Date;
    metadataProperties?: MetadataProperties;
    metrics?: TrialComponentMetricSummary[];
    outputArtifacts?: Map<string, TrialComponentArtifact>;
    parameters?: Map<string, TrialComponentParameterValue>;
    parents?: Parent[];
    source?: TrialComponentSource;
    sourceDetail?: TrialComponentSourceDetail;
    startTime?: Date;
    status?: TrialComponentStatus;
    tags?: Tag[];
    trialComponentArn?: string;
    trialComponentName?: string;
}
