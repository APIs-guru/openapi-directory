import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";


export class StartDataIngestionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: IngestionJobStatusEnum;
}
