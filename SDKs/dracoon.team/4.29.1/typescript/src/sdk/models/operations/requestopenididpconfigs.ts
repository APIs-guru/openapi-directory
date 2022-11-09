import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestOpenIdIdpConfigsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestOpenIdIdpConfigsRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestOpenIdIdpConfigsHeaders;
}


export class RequestOpenIdIdpConfigsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata({ elemType: shared.OpenIdIdpConfig })
  openIdIdpConfigs?: shared.OpenIdIdpConfig[];

  @Metadata()
  statusCode: number;
}
