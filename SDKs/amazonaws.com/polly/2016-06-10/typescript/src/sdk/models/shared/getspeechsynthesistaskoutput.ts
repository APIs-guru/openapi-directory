import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SynthesisTask } from "./synthesistask";



export class GetSpeechSynthesisTaskOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SynthesisTask" })
  synthesisTask?: SynthesisTask;
}
