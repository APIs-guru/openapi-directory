import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccountGetPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=guestId" })
  guestId: number;
}

export enum AccountGetPermissionsEntityTypeEnum {
    Datapoint = "datapoint"
,    Group = "group"
}

export enum AccountGetPermissionsTypeEnum {
    R = "r"
,    W = "w"
}


export class AccountGetPermissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=entityId" })
  entityId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=entityType" })
  entityType?: AccountGetPermissionsEntityTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: AccountGetPermissionsTypeEnum;
}


export class AccountGetPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccountGetPermissionsPathParams;

  @Metadata()
  queryParams: AccountGetPermissionsQueryParams;
}


export class AccountGetPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  apiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant?: shared.ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
