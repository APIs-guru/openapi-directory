import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GroupsGetStatusEnum {
    Deleted = "deleted",
    Active = "active"
}


export class GroupsGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GroupsGetStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=write" })
  write?: boolean;
}


export class GroupsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GroupsGetQueryParams;
}


export class GroupsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
