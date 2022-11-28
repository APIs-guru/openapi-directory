import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SqlParameter } from "./sqlparameter";



export class ExecuteStatementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database: string;

  @SpeakeasyMetadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: SqlParameter })
  parameters?: SqlParameter[];

  @SpeakeasyMetadata({ data: "json, name=SecretArn" })
  secretArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Sql" })
  sql: string;

  @SpeakeasyMetadata({ data: "json, name=StatementName" })
  statementName?: string;

  @SpeakeasyMetadata({ data: "json, name=WithEvent" })
  withEvent?: boolean;
}
