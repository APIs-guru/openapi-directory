import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
import { IngestionJobStatusEnum } from "./ingestionjobstatusenum";


export class DescribeDataIngestionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=FailedReason" })
  failedReason?: string;

  @Metadata({ data: "json, name=IngestionInputConfiguration" })
  ingestionInputConfiguration?: IngestionInputConfiguration;

  @Metadata({ data: "json, name=JobId" })
  jobId?: string;

  @Metadata({ data: "json, name=RoleArn" })
  roleArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: IngestionJobStatusEnum;
}
