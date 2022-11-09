import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Block } from "./block";
import { DocumentMetadata } from "./documentmetadata";


export class DetectDocumentTextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Blocks", elemType: shared.Block })
  blocks?: Block[];

  @Metadata({ data: "json, name=DetectDocumentTextModelVersion" })
  detectDocumentTextModelVersion?: string;

  @Metadata({ data: "json, name=DocumentMetadata" })
  documentMetadata?: DocumentMetadata;
}
