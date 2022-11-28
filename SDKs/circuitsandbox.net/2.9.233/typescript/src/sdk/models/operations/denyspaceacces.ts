import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DenySpaceAccesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=participantId" })
  participantId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}


export class DenySpaceAccesRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=reason;" })
  reason?: string;
}


export class DenySpaceAccesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DenySpaceAccesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DenySpaceAccesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: DenySpaceAccesRequestBody;

  @SpeakeasyMetadata()
  security: DenySpaceAccesSecurity;
}


export class DenySpaceAccesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
