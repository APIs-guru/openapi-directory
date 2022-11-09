import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountGetPermissionsCountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=guestId" })
  guestId: number;
}

export enum AccountGetPermissionsCountEntityTypeEnum {
    Datapoint = "datapoint"
,    Group = "group"
}

export enum AccountGetPermissionsCountTypeEnum {
    R = "r"
,    W = "w"
}


export class AccountGetPermissionsCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=entityId" })
  entityId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entityType" })
  entityType?: AccountGetPermissionsCountEntityTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: AccountGetPermissionsCountTypeEnum;
}


export class AccountGetPermissionsCountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccountGetPermissionsCountPathParams;

  @Metadata()
  queryParams: AccountGetPermissionsCountQueryParams;
}


export class AccountGetPermissionsCountResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
