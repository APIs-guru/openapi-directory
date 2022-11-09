import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Block } from "./block";
import { DocumentMetadata } from "./documentmetadata";
import { JobStatusEnum } from "./jobstatusenum";
import { Warning } from "./warning";


export class GetDocumentTextDetectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Blocks", elemType: shared.Block })
  blocks?: Block[];

  @Metadata({ data: "json, name=DetectDocumentTextModelVersion" })
  detectDocumentTextModelVersion?: string;

  @Metadata({ data: "json, name=DocumentMetadata" })
  documentMetadata?: DocumentMetadata;

  @Metadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @Metadata({ data: "json, name=Warnings", elemType: shared.Warning })
  warnings?: Warning[];
}
