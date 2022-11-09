import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";


// DataIngestionJobSummary
/** 
 * Provides information about a specified data ingestion job, including dataset information, data ingestion configuration, and status. 
**/
export class DataIngestionJobSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @Metadata({ data: "json, name=IngestionInputConfiguration" })
  ingestionInputConfiguration?: IngestionInputConfiguration;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: IngestionJobStatusEnum;
}
