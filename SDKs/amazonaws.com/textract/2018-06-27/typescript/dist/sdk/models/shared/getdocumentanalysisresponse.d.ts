import { SpeakeasyBase } from "../../../internal/utils";
import { Block } from "./block";
import { DocumentMetadata } from "./documentmetadata";
import { JobStatusEnum } from "./jobstatusenum";
import { Warning } from "./warning";
export declare class GetDocumentAnalysisResponse extends SpeakeasyBase {
    analyzeDocumentModelVersion?: string;
    blocks?: Block[];
    documentMetadata?: DocumentMetadata;
    jobStatus?: JobStatusEnum;
    nextToken?: string;
    statusMessage?: string;
    warnings?: Warning[];
}
