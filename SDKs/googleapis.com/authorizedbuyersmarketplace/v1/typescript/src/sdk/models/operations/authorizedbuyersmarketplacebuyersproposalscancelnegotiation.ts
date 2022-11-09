import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=proposal" })
  proposal: string;
}


export class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationPathParams;

  @Metadata()
  queryParams: AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;

  @Metadata()
  security: AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationSecurity;
}


export class AuthorizedbuyersmarketplaceBuyersProposalsCancelNegotiationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  proposal?: shared.Proposal;

  @Metadata()
  statusCode: number;
}
