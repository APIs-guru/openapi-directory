import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FireteamGetAvailableClanFireteamsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityType" })
  activityType: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateRange" })
  dateRange: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=publicOnly" })
  publicOnly: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slotFilter" })
  slotFilter: number;
}


export class FireteamGetAvailableClanFireteamsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=langFilter" })
  langFilter?: string;
}


export class FireteamGetAvailableClanFireteamsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FireteamGetAvailableClanFireteamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FireteamGetAvailableClanFireteamsPathParams;

  @SpeakeasyMetadata()
  queryParams: FireteamGetAvailableClanFireteamsQueryParams;

  @SpeakeasyMetadata()
  security: FireteamGetAvailableClanFireteamsSecurity;
}


export class FireteamGetAvailableClanFireteamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
