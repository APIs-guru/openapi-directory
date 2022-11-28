import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";



export class StartDataIngestionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: IngestionJobStatusEnum;
}
