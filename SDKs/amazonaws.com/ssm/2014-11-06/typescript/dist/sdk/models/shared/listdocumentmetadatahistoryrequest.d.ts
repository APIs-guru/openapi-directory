import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentMetadataEnumEnum } from "./documentmetadataenumenum";
export declare class ListDocumentMetadataHistoryRequest extends SpeakeasyBase {
    documentVersion?: string;
    maxResults?: number;
    metadata: DocumentMetadataEnumEnum;
    name: string;
    nextToken?: string;
}
