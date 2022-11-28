import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GroupsCountStatusEnum {
    Deleted = "deleted",
    Active = "active"
}


export class GroupsCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAfter" })
  createdAfter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdBefore" })
  createdBefore?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: GroupsCountStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=textSearch" })
  textSearch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=write" })
  write?: boolean;
}


export class GroupsCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GroupsCountQueryParams;
}


export class GroupsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
