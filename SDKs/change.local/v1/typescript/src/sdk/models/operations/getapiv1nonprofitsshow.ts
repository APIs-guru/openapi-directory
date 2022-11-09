import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiV1NonprofitsShowQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class GetApiV1NonprofitsShowSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class GetApiV1NonprofitsShowRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetApiV1NonprofitsShowQueryParams;

  @Metadata()
  security: GetApiV1NonprofitsShowSecurity;
}


export class GetApiV1NonprofitsShowResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
