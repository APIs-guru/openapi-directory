import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1ProvincesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetApiV1ProvincesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1ProvincesQueryParams;
}


export class GetApiV1Provinces200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=provinces", elemType: shared.Province })
  provinces?: shared.Province[];
}


export class GetApiV1ProvincesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getApiV1Provinces200ApplicationJsonObject?: GetApiV1Provinces200ApplicationJson;
}
