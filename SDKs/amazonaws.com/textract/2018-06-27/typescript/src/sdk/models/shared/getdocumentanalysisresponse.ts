import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Block } from "./block";
import { DocumentMetadata } from "./documentmetadata";
import { JobStatusEnum } from "./jobstatusenum";
import { Warning } from "./warning";



export class GetDocumentAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AnalyzeDocumentModelVersion" })
  analyzeDocumentModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Blocks", elemType: Block })
  blocks?: Block[];

  @SpeakeasyMetadata({ data: "json, name=DocumentMetadata" })
  documentMetadata?: DocumentMetadata;

  @SpeakeasyMetadata({ data: "json, name=JobStatus" })
  jobStatus?: JobStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=StatusMessage" })
  statusMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Warnings", elemType: Warning })
  warnings?: Warning[];
}
