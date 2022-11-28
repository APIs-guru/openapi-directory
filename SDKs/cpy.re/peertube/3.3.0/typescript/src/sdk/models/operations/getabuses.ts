import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetAbusesFilterEnum {
    Video = "video",
    Comment = "comment",
    Account = "account"
}

export enum GetAbusesVideoIsEnum {
    Deleted = "deleted",
    Blacklisted = "blacklisted"
}


export class GetAbusesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetAbusesFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=predefinedReason" })
  predefinedReason?: shared.PredefinedAbuseReasonsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchReportee" })
  searchReportee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchReporter" })
  searchReporter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchVideo" })
  searchVideo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchVideoChannel" })
  searchVideoChannel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: shared.AbusesSortEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=state" })
  state?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=videoIs" })
  videoIs?: GetAbusesVideoIsEnum;
}


export class GetAbusesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetAbuses200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class GetAbusesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAbusesQueryParams;

  @SpeakeasyMetadata()
  security: GetAbusesSecurity;
}


export class GetAbusesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAbuses200ApplicationJsonObject?: GetAbuses200ApplicationJson;
}
