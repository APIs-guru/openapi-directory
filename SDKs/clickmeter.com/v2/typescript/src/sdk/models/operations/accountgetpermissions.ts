import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccountGetPermissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guestId" })
  guestId: number;
}

export enum AccountGetPermissionsEntityTypeEnum {
    Datapoint = "datapoint",
    Group = "group"
}

export enum AccountGetPermissionsTypeEnum {
    R = "r",
    W = "w"
}


export class AccountGetPermissionsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entityId" })
  entityId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=entityType" })
  entityType?: AccountGetPermissionsEntityTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: AccountGetPermissionsTypeEnum;
}


export class AccountGetPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccountGetPermissionsPathParams;

  @SpeakeasyMetadata()
  queryParams: AccountGetPermissionsQueryParams;
}


export class AccountGetPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
