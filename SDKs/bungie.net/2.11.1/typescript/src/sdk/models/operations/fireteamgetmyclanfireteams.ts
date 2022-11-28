import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FireteamGetMyClanFireteamsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=includeClosed" })
  includeClosed: boolean;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: number;
}


export class FireteamGetMyClanFireteamsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupFilter" })
  groupFilter?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=langFilter" })
  langFilter?: string;
}


export class FireteamGetMyClanFireteamsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FireteamGetMyClanFireteamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FireteamGetMyClanFireteamsPathParams;

  @SpeakeasyMetadata()
  queryParams: FireteamGetMyClanFireteamsQueryParams;

  @SpeakeasyMetadata()
  security: FireteamGetMyClanFireteamsSecurity;
}


export class FireteamGetMyClanFireteamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
