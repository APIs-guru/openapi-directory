import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestSpaceAccesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}


export class RequestSpaceAccesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=reason;" })
  reason?: string;
}


export class RequestSpaceAccesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RequestSpaceAccesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestSpaceAccesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: RequestSpaceAccesRequestBody;

  @SpeakeasyMetadata()
  security: RequestSpaceAccesSecurity;
}


export class RequestSpaceAccesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
