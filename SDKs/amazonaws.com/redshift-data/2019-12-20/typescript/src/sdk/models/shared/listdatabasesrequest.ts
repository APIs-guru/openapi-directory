import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDatabasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier: string;

  @SpeakeasyMetadata({ data: "json, name=Database" })
  database: string;

  @SpeakeasyMetadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretArn" })
  secretArn?: string;
}
