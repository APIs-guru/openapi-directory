import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTableRequest extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=Schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretArn" })
  secretArn?: string;

  @SpeakeasyMetadata({ data: "json, name=Table" })
  table?: string;
}
