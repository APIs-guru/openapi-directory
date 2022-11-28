import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExecuteStatementOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretArn" })
  secretArn?: string;
}
