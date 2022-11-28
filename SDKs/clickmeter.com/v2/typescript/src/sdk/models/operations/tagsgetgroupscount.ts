import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class TagsGetGroupsCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tagId" })
  tagId: number;
}

export enum TagsGetGroupsCountStatusEnum {
    Deleted = "deleted",
    Active = "active"
}


export class TagsGetGroupsCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: TagsGetGroupsCountStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;
}


export class TagsGetGroupsCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TagsGetGroupsCountPathParams;

  @SpeakeasyMetadata()
  queryParams: TagsGetGroupsCountQueryParams;
}


export class TagsGetGroupsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
