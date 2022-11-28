import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlParameter } from "./sqlparameter";
import { StatusStringEnum } from "./statusstringenum";
import { SubStatementData } from "./substatementdata";



export class DescribeStatementResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=HasResultSet" })
  hasResultSet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=QueryParameters", elemType: SqlParameter })
  queryParameters?: SqlParameter[];

  @SpeakeasyMetadata({ data: "json, name=QueryString" })
  queryString?: string;

  @SpeakeasyMetadata({ data: "json, name=RedshiftPid" })
  redshiftPid?: number;

  @SpeakeasyMetadata({ data: "json, name=RedshiftQueryId" })
  redshiftQueryId?: number;

  @SpeakeasyMetadata({ data: "json, name=ResultRows" })
  resultRows?: number;

  @SpeakeasyMetadata({ data: "json, name=ResultSize" })
  resultSize?: number;

  @SpeakeasyMetadata({ data: "json, name=SecretArn" })
  secretArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: StatusStringEnum;

  @SpeakeasyMetadata({ data: "json, name=SubStatements", elemType: SubStatementData })
  subStatements?: SubStatementData[];

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
