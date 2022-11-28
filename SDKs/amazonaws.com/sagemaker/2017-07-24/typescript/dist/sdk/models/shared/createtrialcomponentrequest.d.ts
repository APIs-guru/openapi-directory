import { SpeakeasyBase } from "../../../internal/utils";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { MetadataProperties } from "./metadataproperties";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { TrialComponentStatus } from "./trialcomponentstatus";
import { Tag } from "./tag";
export declare class CreateTrialComponentRequest extends SpeakeasyBase {
    displayName?: string;
    endTime?: Date;
    inputArtifacts?: Map<string, TrialComponentArtifact>;
    metadataProperties?: MetadataProperties;
    outputArtifacts?: Map<string, TrialComponentArtifact>;
    parameters?: Map<string, TrialComponentParameterValue>;
    startTime?: Date;
    status?: TrialComponentStatus;
    tags?: Tag[];
    trialComponentName: string;
}
