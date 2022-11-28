import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SynthesisTask } from "./synthesistask";



export class ListSpeechSynthesisTasksOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SynthesisTasks", elemType: SynthesisTask })
  synthesisTasks?: SynthesisTask[];
}
