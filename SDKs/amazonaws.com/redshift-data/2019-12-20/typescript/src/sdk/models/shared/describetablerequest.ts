import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeTableRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier: string;

  @Metadata({ data: "json, name=ConnectedDatabase" })
  connectedDatabase?: string;

  @Metadata({ data: "json, name=Database" })
  database: string;

  @Metadata({ data: "json, name=DbUser" })
  dbUser?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Schema" })
  schema?: string;

  @Metadata({ data: "json, name=SecretArn" })
  secretArn?: string;

  @Metadata({ data: "json, name=Table" })
  table?: string;
}
