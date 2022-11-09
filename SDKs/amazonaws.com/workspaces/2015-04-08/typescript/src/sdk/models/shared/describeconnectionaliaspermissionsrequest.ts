import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeConnectionAliasPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasId" })
  aliasId: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
