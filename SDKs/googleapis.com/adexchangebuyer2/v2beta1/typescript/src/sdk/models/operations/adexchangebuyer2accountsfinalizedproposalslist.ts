import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Adexchangebuyer2AccountsFinalizedProposalsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}

export enum Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum {
    FilterSyntaxUnspecified = "FILTER_SYNTAX_UNSPECIFIED",
    Pql = "PQL",
    ListFilter = "LIST_FILTER"
}


export class Adexchangebuyer2AccountsFinalizedProposalsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filterSyntax" })
  filterSyntax?: Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class Adexchangebuyer2AccountsFinalizedProposalsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class Adexchangebuyer2AccountsFinalizedProposalsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: Adexchangebuyer2AccountsFinalizedProposalsListPathParams;

  @SpeakeasyMetadata()
  queryParams: Adexchangebuyer2AccountsFinalizedProposalsListQueryParams;

  @SpeakeasyMetadata()
  security: Adexchangebuyer2AccountsFinalizedProposalsListSecurity;
}


export class Adexchangebuyer2AccountsFinalizedProposalsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listProposalsResponse?: shared.ListProposalsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
