import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestOpenIdIdpConfigsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestOpenIdIdpConfigsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestOpenIdIdpConfigsHeaders;
}


export class RequestOpenIdIdpConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.OpenIdIdpConfig })
  openIdIdpConfigs?: shared.OpenIdIdpConfig[];

  @SpeakeasyMetadata()
  statusCode: number;
}
