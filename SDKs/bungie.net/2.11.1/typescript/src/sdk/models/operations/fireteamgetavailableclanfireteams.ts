import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FireteamGetAvailableClanFireteamsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityType" })
  activityType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateRange" })
  dateRange: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=publicOnly" })
  publicOnly: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=slotFilter" })
  slotFilter: number;
}


export class FireteamGetAvailableClanFireteamsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=langFilter" })
  langFilter?: string;
}


export class FireteamGetAvailableClanFireteamsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FireteamGetAvailableClanFireteamsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FireteamGetAvailableClanFireteamsPathParams;

  @Metadata()
  queryParams: FireteamGetAvailableClanFireteamsQueryParams;

  @Metadata()
  security: FireteamGetAvailableClanFireteamsSecurity;
}


export class FireteamGetAvailableClanFireteamsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
