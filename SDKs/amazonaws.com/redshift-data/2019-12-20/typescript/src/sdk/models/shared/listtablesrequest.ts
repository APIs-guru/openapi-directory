import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListTablesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=ConnectedDatabase" })
  connectedDatabase?: string;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database: string;

  @SpeakeasyMetadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemaPattern" })
  schemaPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretArn" })
  secretArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TablePattern" })
  tablePattern?: string;
}
