import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopActivationOutput } from "./humanloopactivationoutput";
import { ModerationLabel } from "./moderationlabel";



export class DetectModerationLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanLoopActivationOutput" })
  humanLoopActivationOutput?: HumanLoopActivationOutput;

  @SpeakeasyMetadata({ data: "json, name=ModerationLabels", elemType: ModerationLabel })
  moderationLabels?: ModerationLabel[];

  @SpeakeasyMetadata({ data: "json, name=ModerationModelVersion" })
  moderationModelVersion?: string;
}
