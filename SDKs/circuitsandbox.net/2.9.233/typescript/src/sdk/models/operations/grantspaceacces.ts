import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GrantSpaceAccesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=participantId" })
  participantId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}


export class GrantSpaceAccesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GrantSpaceAccesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GrantSpaceAccesPathParams;

  @Metadata()
  security: GrantSpaceAccesSecurity;
}


export class GrantSpaceAccesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
