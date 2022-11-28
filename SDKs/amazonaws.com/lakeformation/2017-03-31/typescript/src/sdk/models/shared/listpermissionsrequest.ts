import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataLakePrincipal } from "./datalakeprincipal";
import { Resource } from "./resource";
import { DataLakeResourceTypeEnum } from "./datalakeresourcetypeenum";



export class ListPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Principal" })
  principal?: DataLakePrincipal;

  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource?: Resource;

  @SpeakeasyMetadata({ data: "json, name=ResourceType" })
  resourceType?: DataLakeResourceTypeEnum;
}
