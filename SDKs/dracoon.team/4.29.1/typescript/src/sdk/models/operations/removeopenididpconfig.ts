import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveOpenIdIdpConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=idp_id" })
  idpId: number;
}


export class RemoveOpenIdIdpConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveOpenIdIdpConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveOpenIdIdpConfigPathParams;

  @Metadata()
  headers: RemoveOpenIdIdpConfigHeaders;
}


export class RemoveOpenIdIdpConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
