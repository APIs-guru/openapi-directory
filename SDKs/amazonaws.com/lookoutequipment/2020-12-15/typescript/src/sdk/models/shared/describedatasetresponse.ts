import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IngestionInputConfiguration } from "./ingestioninputconfiguration";
import { DatasetStatusEnum } from "./datasetstatusenum";



export class DescribeDatasetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=DatasetArn" })
  datasetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=DatasetName" })
  datasetName?: string;

  @SpeakeasyMetadata({ data: "json, name=IngestionInputConfiguration" })
  ingestionInputConfiguration?: IngestionInputConfiguration;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=ServerSideKmsKeyId" })
  serverSideKmsKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: DatasetStatusEnum;
}
