import { SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { MetadataProperties } from "./metadataproperties";
import { TrialComponentMetricSummary } from "./trialcomponentmetricsummary";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { TrialComponentSource } from "./trialcomponentsource";
import { TrialComponentStatus } from "./trialcomponentstatus";
export declare class DescribeTrialComponentResponse extends SpeakeasyBase {
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
    source?: TrialComponentSource;
    startTime?: Date;
    status?: TrialComponentStatus;
    trialComponentArn?: string;
    trialComponentName?: string;
}
