import { SpeakeasyBase } from "../../../internal/utils";
import { Block } from "./block";
import { DocumentMetadata } from "./documentmetadata";
import { HumanLoopActivationOutput } from "./humanloopactivationoutput";
export declare class AnalyzeDocumentResponse extends SpeakeasyBase {
    analyzeDocumentModelVersion?: string;
    blocks?: Block[];
    documentMetadata?: DocumentMetadata;
    humanLoopActivationOutput?: HumanLoopActivationOutput;
}
