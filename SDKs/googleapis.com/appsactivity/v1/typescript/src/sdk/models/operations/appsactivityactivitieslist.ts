import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AppsactivityActivitiesListGroupingStrategyEnum {
    DriveUi = "driveUi"
,    None = "none"
}


export class AppsactivityActivitiesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=drive.ancestorId" })
  driveAncestorId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=drive.fileId" })
  driveFileId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupingStrategy" })
  groupingStrategy?: AppsactivityActivitiesListGroupingStrategyEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=source" })
  source?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userId" })
  userId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AppsactivityActivitiesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AppsactivityActivitiesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AppsactivityActivitiesListQueryParams;

  @Metadata()
  security: AppsactivityActivitiesListSecurity;
}


export class AppsactivityActivitiesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listActivitiesResponse?: shared.ListActivitiesResponse;

  @Metadata()
  statusCode: number;
}
