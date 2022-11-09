import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestSpaceAccesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}


export class RequestSpaceAccesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=reason;" })
  reason?: string;
}


export class RequestSpaceAccesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RequestSpaceAccesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestSpaceAccesPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: RequestSpaceAccesRequestBody;

  @Metadata()
  security: RequestSpaceAccesSecurity;
}


export class RequestSpaceAccesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
