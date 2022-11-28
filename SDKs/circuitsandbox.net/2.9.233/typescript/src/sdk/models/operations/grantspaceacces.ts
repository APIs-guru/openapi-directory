import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GrantSpaceAccesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=participantId" })
  participantId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=spaceId" })
  spaceId: string;
}


export class GrantSpaceAccesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GrantSpaceAccesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GrantSpaceAccesPathParams;

  @SpeakeasyMetadata()
  security: GrantSpaceAccesSecurity;
}


export class GrantSpaceAccesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
