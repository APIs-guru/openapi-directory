import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Adexchangebuyer2AccountsProposalsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}

export enum Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum {
    FilterSyntaxUnspecified = "FILTER_SYNTAX_UNSPECIFIED"
,    Pql = "PQL"
,    ListFilter = "LIST_FILTER"
}


export class Adexchangebuyer2AccountsProposalsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filterSyntax" })
  filterSyntax?: Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class Adexchangebuyer2AccountsProposalsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Adexchangebuyer2AccountsProposalsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: Adexchangebuyer2AccountsProposalsListPathParams;

  @Metadata()
  queryParams: Adexchangebuyer2AccountsProposalsListQueryParams;

  @Metadata()
  security: Adexchangebuyer2AccountsProposalsListSecurity;
}


export class Adexchangebuyer2AccountsProposalsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listProposalsResponse?: shared.ListProposalsResponse;

  @Metadata()
  statusCode: number;
}
