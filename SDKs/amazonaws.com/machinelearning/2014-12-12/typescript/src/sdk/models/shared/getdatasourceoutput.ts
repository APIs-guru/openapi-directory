import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RdsMetadata } from "./rdsmetadata";
import { RedshiftMetadata } from "./redshiftmetadata";
import { EntityStatusEnum } from "./entitystatusenum";



// GetDataSourceOutput
/** 
 * Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>.
**/
export class GetDataSourceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ComputeStatistics" })
  computeStatistics?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ComputeTime" })
  computeTime?: number;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=CreatedByIamUser" })
  createdByIamUser?: string;

  @SpeakeasyMetadata({ data: "json, name=DataLocationS3" })
  dataLocationS3?: string;

  @SpeakeasyMetadata({ data: "json, name=DataRearrangement" })
  dataRearrangement?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSizeInBytes" })
  dataSizeInBytes?: number;

  @SpeakeasyMetadata({ data: "json, name=DataSourceId" })
  dataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSourceSchema" })
  dataSourceSchema?: string;

  @SpeakeasyMetadata({ data: "json, name=FinishedAt" })
  finishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=LogUri" })
  logUri?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfFiles" })
  numberOfFiles?: number;

  @SpeakeasyMetadata({ data: "json, name=RDSMetadata" })
  rdsMetadata?: RdsMetadata;

  @SpeakeasyMetadata({ data: "json, name=RedshiftMetadata" })
  redshiftMetadata?: RedshiftMetadata;

  @SpeakeasyMetadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @SpeakeasyMetadata({ data: "json, name=StartedAt" })
  startedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: EntityStatusEnum;
}
