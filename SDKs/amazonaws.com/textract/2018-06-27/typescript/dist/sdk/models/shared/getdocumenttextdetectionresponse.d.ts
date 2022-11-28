import { SpeakeasyBase } from "../../../internal/utils";
import { Block } from "./block";
import { DocumentMetadata } from "./documentmetadata";
import { JobStatusEnum } from "./jobstatusenum";
import { Warning } from "./warning";
export declare class GetDocumentTextDetectionResponse extends SpeakeasyBase {
    blocks?: Block[];
    detectDocumentTextModelVersion?: string;
    documentMetadata?: DocumentMetadata;
    jobStatus?: JobStatusEnum;
    nextToken?: string;
    statusMessage?: string;
    warnings?: Warning[];
}
