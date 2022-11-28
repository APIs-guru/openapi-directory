import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSecretVersionIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IncludeDeprecated" })
  includeDeprecated?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretId" })
  secretId: string;
}
