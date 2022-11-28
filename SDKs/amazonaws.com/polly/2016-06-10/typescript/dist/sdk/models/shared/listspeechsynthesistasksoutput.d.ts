import { SpeakeasyBase } from "../../../internal/utils";
import { SynthesisTask } from "./synthesistask";
export declare class ListSpeechSynthesisTasksOutput extends SpeakeasyBase {
    nextToken?: string;
    synthesisTasks?: SynthesisTask[];
}
