import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartDocumentAnalysisResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId?: string;
}
