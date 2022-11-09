import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HumanLoopActivationOutput } from "./humanloopactivationoutput";
import { ModerationLabel } from "./moderationlabel";


export class DetectModerationLabelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=HumanLoopActivationOutput" })
  humanLoopActivationOutput?: HumanLoopActivationOutput;

  @Metadata({ data: "json, name=ModerationLabels", elemType: shared.ModerationLabel })
  moderationLabels?: ModerationLabel[];

  @Metadata({ data: "json, name=ModerationModelVersion" })
  moderationModelVersion?: string;
}
