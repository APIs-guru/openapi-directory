import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FireteamSearchPublicAvailableClanFireteamsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityType" })
  activityType: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateRange" })
  dateRange: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=platform" })
  platform: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slotFilter" })
  slotFilter: number;
}


export class FireteamSearchPublicAvailableClanFireteamsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=langFilter" })
  langFilter?: string;
}


export class FireteamSearchPublicAvailableClanFireteamsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class FireteamSearchPublicAvailableClanFireteamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FireteamSearchPublicAvailableClanFireteamsPathParams;

  @SpeakeasyMetadata()
  queryParams: FireteamSearchPublicAvailableClanFireteamsQueryParams;

  @SpeakeasyMetadata()
  security: FireteamSearchPublicAvailableClanFireteamsSecurity;
}


export class FireteamSearchPublicAvailableClanFireteamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
