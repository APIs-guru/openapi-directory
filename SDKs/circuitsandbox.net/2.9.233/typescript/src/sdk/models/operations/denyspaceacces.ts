import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DenySpaceAccesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=participantId" })
  participantId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}


export class DenySpaceAccesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=reason;" })
  reason?: string;
}


export class DenySpaceAccesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DenySpaceAccesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DenySpaceAccesPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: DenySpaceAccesRequestBody;

  @Metadata()
  security: DenySpaceAccesSecurity;
}


export class DenySpaceAccesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
