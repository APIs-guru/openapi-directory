import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInfoTldZonePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" })
  zone: string;
}


export class GetInfoTldZoneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: string;
}


export class GetInfoTldZoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInfoTldZonePathParams;

  @SpeakeasyMetadata()
  queryParams: GetInfoTldZoneQueryParams;
}


export class GetInfoTldZoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  zoneInfo?: shared.ZoneInfo;
}
