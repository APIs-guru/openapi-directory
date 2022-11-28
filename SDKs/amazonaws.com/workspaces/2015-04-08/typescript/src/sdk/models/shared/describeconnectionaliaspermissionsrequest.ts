import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeConnectionAliasPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasId" })
  aliasId: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
