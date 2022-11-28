import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Block } from "./block";
import { DocumentMetadata } from "./documentmetadata";



export class DetectDocumentTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Blocks", elemType: Block })
  blocks?: Block[];

  @SpeakeasyMetadata({ data: "json, name=DetectDocumentTextModelVersion" })
  detectDocumentTextModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentMetadata" })
  documentMetadata?: DocumentMetadata;
}
