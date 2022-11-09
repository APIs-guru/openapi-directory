import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=activityId" })
  activityId: number;
}


export class Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class Destiny2ReportOffensivePostGameCarnageReportPlayerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Destiny2ReportOffensivePostGameCarnageReportPlayerPathParams;

  @Metadata()
  security: Destiny2ReportOffensivePostGameCarnageReportPlayerSecurity;
}


export class Destiny2ReportOffensivePostGameCarnageReportPlayerResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
