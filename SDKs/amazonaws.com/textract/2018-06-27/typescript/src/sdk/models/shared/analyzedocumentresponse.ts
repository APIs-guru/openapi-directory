import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Block } from "./block";
import { DocumentMetadata } from "./documentmetadata";
import { HumanLoopActivationOutput } from "./humanloopactivationoutput";


export class AnalyzeDocumentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AnalyzeDocumentModelVersion" })
  analyzeDocumentModelVersion?: string;

  @Metadata({ data: "json, name=Blocks", elemType: shared.Block })
  blocks?: Block[];

  @Metadata({ data: "json, name=DocumentMetadata" })
  documentMetadata?: DocumentMetadata;

  @Metadata({ data: "json, name=HumanLoopActivationOutput" })
  humanLoopActivationOutput?: HumanLoopActivationOutput;
}
