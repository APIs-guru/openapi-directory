import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataLakePrincipal } from "./datalakeprincipal";
import { Resource } from "./resource";
import { DataLakeResourceTypeEnum } from "./datalakeresourcetypeenum";


export class ListPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Principal" })
  principal?: DataLakePrincipal;

  @Metadata({ data: "json, name=Resource" })
  resource?: Resource;

  @Metadata({ data: "json, name=ResourceType" })
  resourceType?: DataLakeResourceTypeEnum;
}
