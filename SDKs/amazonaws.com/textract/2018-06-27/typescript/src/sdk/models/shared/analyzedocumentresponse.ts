import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Block } from "./block";
import { DocumentMetadata } from "./documentmetadata";
import { HumanLoopActivationOutput } from "./humanloopactivationoutput";



export class AnalyzeDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnalyzeDocumentModelVersion" })
  analyzeDocumentModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Blocks", elemType: Block })
  blocks?: Block[];

  @SpeakeasyMetadata({ data: "json, name=DocumentMetadata" })
  documentMetadata?: DocumentMetadata;

  @SpeakeasyMetadata({ data: "json, name=HumanLoopActivationOutput" })
  humanLoopActivationOutput?: HumanLoopActivationOutput;
}
