import { SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopActivationOutput } from "./humanloopactivationoutput";
import { ModerationLabel } from "./moderationlabel";
export declare class DetectModerationLabelsResponse extends SpeakeasyBase {
    humanLoopActivationOutput?: HumanLoopActivationOutput;
    moderationLabels?: ModerationLabel[];
    moderationModelVersion?: string;
}
