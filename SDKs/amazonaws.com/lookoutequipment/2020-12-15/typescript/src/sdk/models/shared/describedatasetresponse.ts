import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
import { DatasetStatusEnum } from "./datasetstatusenum";


export class DescribeDatasetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @Metadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @Metadata({ data: "json, name=IngestionInputConfiguration" })
  ingestionInputConfiguration?: IngestionInputConfiguration;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=Schema" })
  schema?: string;

  @Metadata({ data: "json, name=ServerSideKmsKeyId" })
  serverSideKmsKeyId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: DatasetStatusEnum;
}
