import { SpeakeasyBase } from "../../../internal/utils";
import { Block } from "./block";
import { DocumentMetadata } from "./documentmetadata";
export declare class DetectDocumentTextResponse extends SpeakeasyBase {
    blocks?: Block[];
    detectDocumentTextModelVersion?: string;
    documentMetadata?: DocumentMetadata;
}
