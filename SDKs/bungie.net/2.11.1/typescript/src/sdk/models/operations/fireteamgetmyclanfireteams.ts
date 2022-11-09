import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FireteamGetMyClanFireteamsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=includeClosed" })
  includeClosed: boolean;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: number;
}


export class FireteamGetMyClanFireteamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=groupFilter" })
  groupFilter?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=langFilter" })
  langFilter?: string;
}


export class FireteamGetMyClanFireteamsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FireteamGetMyClanFireteamsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FireteamGetMyClanFireteamsPathParams;

  @Metadata()
  queryParams: FireteamGetMyClanFireteamsQueryParams;

  @Metadata()
  security: FireteamGetMyClanFireteamsSecurity;
}


export class FireteamGetMyClanFireteamsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
