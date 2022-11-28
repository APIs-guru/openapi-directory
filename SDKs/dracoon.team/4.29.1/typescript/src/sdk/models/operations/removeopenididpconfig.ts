import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveOpenIdIdpConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=idp_id" })
  idpId: number;
}


export class RemoveOpenIdIdpConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveOpenIdIdpConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveOpenIdIdpConfigPathParams;

  @SpeakeasyMetadata()
  headers: RemoveOpenIdIdpConfigHeaders;
}


export class RemoveOpenIdIdpConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
