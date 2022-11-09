import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RdsMetadata } from "./rdsmetadata";
import { RedshiftMetadata } from "./redshiftmetadata";
import { EntityStatusEnum } from "./entitystatusenum";


// DataSource
/** 
 * <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>
**/
export class DataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=ComputeStatistics" })
  computeStatistics?: boolean;

  @Metadata({ data: "json, name=ComputeTime" })
  computeTime?: number;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=CreatedByIamUser" })
  createdByIamUser?: string;

  @Metadata({ data: "json, name=DataLocationS3" })
  dataLocationS3?: string;

  @Metadata({ data: "json, name=DataRearrangement" })
  dataRearrangement?: string;

  @Metadata({ data: "json, name=DataSizeInBytes" })
  dataSizeInBytes?: number;

  @Metadata({ data: "json, name=DataSourceId" })
  dataSourceId?: string;

  @Metadata({ data: "json, name=FinishedAt" })
  finishedAt?: Date;

  @Metadata({ data: "json, name=LastUpdatedAt" })
  lastUpdatedAt?: Date;

  @Metadata({ data: "json, name=Message" })
  message?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NumberOfFiles" })
  numberOfFiles?: number;

  @Metadata({ data: "json, name=RDSMetadata" })
  rdsMetadata?: RdsMetadata;

  @Metadata({ data: "json, name=RedshiftMetadata" })
  redshiftMetadata?: RedshiftMetadata;

  @Metadata({ data: "json, name=RoleARN" })
  roleArn?: string;

  @Metadata({ data: "json, name=StartedAt" })
  startedAt?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: EntityStatusEnum;
}
