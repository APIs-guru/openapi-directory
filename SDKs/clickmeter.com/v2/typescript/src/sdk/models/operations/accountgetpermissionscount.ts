import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountGetPermissionsCountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guestId" })
  guestId: number;
}

export enum AccountGetPermissionsCountEntityTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}

export enum AccountGetPermissionsCountTypeEnum {
    R = "r",
    W = "w"
}


export class AccountGetPermissionsCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entityId" })
  entityId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entityType" })
  entityType?: AccountGetPermissionsCountEntityTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: AccountGetPermissionsCountTypeEnum;
}


export class AccountGetPermissionsCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountGetPermissionsCountPathParams;

  @SpeakeasyMetadata()
  queryParams: AccountGetPermissionsCountQueryParams;
}


export class AccountGetPermissionsCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesCountResponce?: shared.ApiCoreResponsesCountResponce;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
