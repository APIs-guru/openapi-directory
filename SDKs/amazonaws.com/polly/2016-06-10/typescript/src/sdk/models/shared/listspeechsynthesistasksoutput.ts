import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SynthesisTask } from "./synthesistask";


export class ListSpeechSynthesisTasksOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SynthesisTasks", elemType: shared.SynthesisTask })
  synthesisTasks?: SynthesisTask[];
}
