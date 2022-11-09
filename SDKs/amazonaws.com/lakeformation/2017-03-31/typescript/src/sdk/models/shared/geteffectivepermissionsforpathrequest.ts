import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEffectivePermissionsForPathRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
