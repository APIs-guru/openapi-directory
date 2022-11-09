import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetApiV1ProvincesProvinceIdProvinceIdEnum {
    Ab = "AB"
,    Bc = "BC"
,    Mb = "MB"
,    Nb = "NB"
,    Nl = "NL"
,    Ns = "NS"
,    Nt = "NT"
,    Nu = "NU"
,    On = "ON"
,    Pe = "PE"
,    Qc = "QC"
,    Sk = "SK"
,    Yt = "YT"
}


export class GetApiV1ProvincesProvinceIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=provinceId" })
  provinceId: GetApiV1ProvincesProvinceIdProvinceIdEnum;
}


export class GetApiV1ProvincesProvinceIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetApiV1ProvincesProvinceIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiV1ProvincesProvinceIdPathParams;

  @Metadata()
  queryParams: GetApiV1ProvincesProvinceIdQueryParams;
}


export class GetApiV1ProvincesProvinceId200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=province" })
  province?: shared.Province;
}


export class GetApiV1ProvincesProvinceId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: shared.Error;
}


export class GetApiV1ProvincesProvinceIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getApiV1ProvincesProvinceId200ApplicationJsonObject?: GetApiV1ProvincesProvinceId200ApplicationJson;

  @Metadata()
  getApiV1ProvincesProvinceId404ApplicationJsonObject?: GetApiV1ProvincesProvinceId404ApplicationJson;
}
