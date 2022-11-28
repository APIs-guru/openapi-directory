import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";



// DataIngestionJobSummary
/** 
 * Provides information about a specified data ingestion job, including dataset information, data ingestion configuration, and status. 
**/
export class DataIngestionJobSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @SpeakeasyMetadata({ data: "json, name=IngestionInputConfiguration" })
  ingestionInputConfiguration?: IngestionInputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: IngestionJobStatusEnum;
}
