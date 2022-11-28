import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartDocumentAnalysisResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
