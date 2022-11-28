import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposal" })
  proposal: string;
}


export class AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AuthorizedbuyersmarketplaceBuyersProposalsAddNoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AuthorizedbuyersmarketplaceBuyersProposalsAddNotePathParams;

  @SpeakeasyMetadata()
  queryParams: AuthorizedbuyersmarketplaceBuyersProposalsAddNoteQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AddNoteRequestInput;

  @SpeakeasyMetadata()
  security: AuthorizedbuyersmarketplaceBuyersProposalsAddNoteSecurity;
}


export class AuthorizedbuyersmarketplaceBuyersProposalsAddNoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  proposal?: shared.Proposal;

  @SpeakeasyMetadata()
  statusCode: number;
}
