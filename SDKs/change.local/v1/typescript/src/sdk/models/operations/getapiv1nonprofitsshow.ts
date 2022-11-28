import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiV1NonprofitsShowQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetApiV1NonprofitsShowSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetApiV1NonprofitsShowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetApiV1NonprofitsShowQueryParams;

  @SpeakeasyMetadata()
  security: GetApiV1NonprofitsShowSecurity;
}


export class GetApiV1NonprofitsShowResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
