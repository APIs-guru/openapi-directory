import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AdexchangebuyerCreativesListStatusFilterEnum {
    Approved = "approved"
,    Disapproved = "disapproved"
,    NotChecked = "not_checked"
}


export class AdexchangebuyerCreativesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=statusFilter" })
  statusFilter?: AdexchangebuyerCreativesListStatusFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdexchangebuyerCreativesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerCreativesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AdexchangebuyerCreativesListQueryParams;

  @Metadata()
  security: AdexchangebuyerCreativesListSecurity;
}


export class AdexchangebuyerCreativesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  creativesList?: shared.CreativesList;

  @Metadata()
  statusCode: number;
}
