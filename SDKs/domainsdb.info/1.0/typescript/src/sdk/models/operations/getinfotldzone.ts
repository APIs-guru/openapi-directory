import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInfoTldZonePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=zone" })
  zone: string;
}


export class GetInfoTldZoneQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetInfoTldZoneRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInfoTldZonePathParams;

  @Metadata()
  queryParams: GetInfoTldZoneQueryParams;
}


export class GetInfoTldZoneResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  zoneInfo?: shared.ZoneInfo;
}
