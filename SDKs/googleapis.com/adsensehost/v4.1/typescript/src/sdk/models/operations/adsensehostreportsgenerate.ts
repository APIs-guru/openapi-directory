import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AdsensehostReportsGenerateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dimension" })
  dimension?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=endDate" })
  endDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=locale" })
  locale?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metric" })
  metric?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=startDate" })
  startDate: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startIndex" })
  startIndex?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdsensehostReportsGenerateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdsensehostReportsGenerateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AdsensehostReportsGenerateQueryParams;

  @Metadata()
  security: AdsensehostReportsGenerateSecurity;
}


export class AdsensehostReportsGenerateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  report?: shared.Report;

  @Metadata()
  statusCode: number;
}
