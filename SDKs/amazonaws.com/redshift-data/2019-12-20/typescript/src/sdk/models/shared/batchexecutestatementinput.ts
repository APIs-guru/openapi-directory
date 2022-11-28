import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BatchExecuteStatementInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database: string;

  @SpeakeasyMetadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretArn" })
  secretArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Sqls" })
  sqls: string[];

  @SpeakeasyMetadata({ data: "json, name=StatementName" })
  statementName?: string;

  @SpeakeasyMetadata({ data: "json, name=WithEvent" })
  withEvent?: boolean;
}
