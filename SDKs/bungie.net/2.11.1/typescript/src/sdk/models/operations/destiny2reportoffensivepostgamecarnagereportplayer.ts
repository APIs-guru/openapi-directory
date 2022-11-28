import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: number;
}


export class Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class Destiny2ReportOffensivePostGameCarnageReportPlayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams;

  @SpeakeasyMetadata()
  security: Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity;
}


export class Destiny2ReportOffensivePostGameCarnageReportPlayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
