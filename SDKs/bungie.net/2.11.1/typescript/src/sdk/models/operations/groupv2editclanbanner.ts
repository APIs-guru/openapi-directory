import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupV2EditClanBannerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2EditClanBannerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2EditClanBannerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2EditClanBannerPathParams;

  @SpeakeasyMetadata()
  security: GroupV2EditClanBannerSecurity;
}


export class GroupV2EditClanBannerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
