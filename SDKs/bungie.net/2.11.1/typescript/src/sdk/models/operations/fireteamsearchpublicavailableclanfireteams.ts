import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FireteamSearchPublicAvailableClanFireteamsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityType" })
  activityType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateRange" })
  dateRange: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=slotFilter" })
  slotFilter: number;
}


export class FireteamSearchPublicAvailableClanFireteamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=langFilter" })
  langFilter?: string;
}


export class FireteamSearchPublicAvailableClanFireteamsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FireteamSearchPublicAvailableClanFireteamsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FireteamSearchPublicAvailableClanFireteamsPathParams;

  @Metadata()
  queryParams: FireteamSearchPublicAvailableClanFireteamsQueryParams;

  @Metadata()
  security: FireteamSearchPublicAvailableClanFireteamsSecurity;
}


export class FireteamSearchPublicAvailableClanFireteamsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
