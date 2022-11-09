import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SqlParameter } from "./sqlparameter";
import { StatusStringEnum } from "./statusstringenum";
import { SubStatementData } from "./substatementdata";


export class DescribeStatementResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier?: string;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=Database" })
  database?: string;

  @Metadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @Metadata({ data: "json, name=Duration" })
  duration?: number;

  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=HasResultSet" })
  hasResultSet?: boolean;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=QueryParameters", elemType: shared.SqlParameter })
  queryParameters?: SqlParameter[];

  @Metadata({ data: "json, name=QueryString" })
  queryString?: string;

  @Metadata({ data: "json, name=RedshiftPid" })
  redshiftPid?: number;

  @Metadata({ data: "json, name=RedshiftQueryId" })
  redshiftQueryId?: number;

  @Metadata({ data: "json, name=ResultRows" })
  resultRows?: number;

  @Metadata({ data: "json, name=ResultSize" })
  resultSize?: number;

  @Metadata({ data: "json, name=SecretArn" })
  secretArn?: string;

  @Metadata({ data: "json, name=Status" })
  status?: StatusStringEnum;

  @Metadata({ data: "json, name=SubStatements", elemType: shared.SubStatementData })
  subStatements?: SubStatementData[];

  @Metadata({ data: "json, name=UpdatedAt" })
  updatedAt?: Date;
}
