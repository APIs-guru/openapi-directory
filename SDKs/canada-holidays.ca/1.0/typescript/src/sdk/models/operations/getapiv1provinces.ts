import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1ProvincesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=year" })
  year?: string;
}


export class GetApiV1Provinces200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=provinces", elemType: shared.Province })
  provinces?: shared.Province[];
}


export class GetApiV1ProvincesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1ProvincesQueryParams;
}


export class GetApiV1ProvincesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getApiV1Provinces200ApplicationJsonObject?: GetApiV1Provinces200ApplicationJson;
}
