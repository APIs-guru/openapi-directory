import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";



export class DescribeDataIngestionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=FailedReason" })
  failedReason?: string;

  @SpeakeasyMetadata({ data: "json, name=IngestionInputConfiguration" })
  ingestionInputConfiguration?: IngestionInputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: IngestionJobStatusEnum;
}
