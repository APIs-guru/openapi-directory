import { SpeakeasyBase } from "../../../internal/utils";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { TrialComponentStatus } from "./trialcomponentstatus";
export declare class UpdateTrialComponentRequest extends SpeakeasyBase {
    displayName?: string;
    endTime?: Date;
    inputArtifacts?: Map<string, TrialComponentArtifact>;
    inputArtifactsToRemove?: string[];
    outputArtifacts?: Map<string, TrialComponentArtifact>;
    outputArtifactsToRemove?: string[];
    parameters?: Map<string, TrialComponentParameterValue>;
    parametersToRemove?: string[];
    startTime?: Date;
    status?: TrialComponentStatus;
    trialComponentName: string;
}
