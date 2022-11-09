import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SqlParameter } from "./sqlparameter";


export class ExecuteStatementInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "json, name=Database" })
  database: string;

  @Metadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @Metadata({ data: "json, name=Parameters", elemType: shared.SqlParameter })
  parameters?: SqlParameter[];

  @Metadata({ data: "json, name=SecretArn" })
  secretArn?: string;

  @Metadata({ data: "json, name=Sql" })
  sql: string;

  @Metadata({ data: "json, name=StatementName" })
  statementName?: string;

  @Metadata({ data: "json, name=WithEvent" })
  withEvent?: boolean;
}
