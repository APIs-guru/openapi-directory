import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BatchExecuteStatementInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "json, name=Database" })
  database: string;

  @Metadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @Metadata({ data: "json, name=SecretArn" })
  secretArn?: string;

  @Metadata({ data: "json, name=Sqls" })
  sqls: string[];

  @Metadata({ data: "json, name=StatementName" })
  statementName?: string;

  @Metadata({ data: "json, name=WithEvent" })
  withEvent?: boolean;
}
