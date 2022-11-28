import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartMailboxExportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
