import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAbusesFilterEnum {
    Video = "video"
,    Comment = "comment"
,    Account = "account"
}

export enum GetAbusesVideoIsEnum {
    Deleted = "deleted"
,    Blacklisted = "blacklisted"
}


export class GetAbusesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetAbusesFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=predefinedReason" })
  predefinedReason?: shared.PredefinedAbuseReasonsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchReportee" })
  searchReportee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchReporter" })
  searchReporter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchVideo" })
  searchVideo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchVideoChannel" })
  searchVideoChannel?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.AbusesSortEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=videoIs" })
  videoIs?: GetAbusesVideoIsEnum;
}


export class GetAbusesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAbusesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAbusesQueryParams;

  @Metadata()
  security: GetAbusesSecurity;
}


export class GetAbuses200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: any[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetAbusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAbuses200ApplicationJsonObject?: GetAbuses200ApplicationJson;
}
