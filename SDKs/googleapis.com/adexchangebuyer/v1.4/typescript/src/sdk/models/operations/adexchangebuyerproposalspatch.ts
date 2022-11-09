import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum AdexchangebuyerProposalsPatchUpdateActionEnum {
    Accept = "accept"
,    Cancel = "cancel"
,    Propose = "propose"
,    ProposeAndAccept = "proposeAndAccept"
,    UnknownAction = "unknownAction"
,    UpdateNonTerms = "updateNonTerms"
}


export class AdexchangebuyerProposalsPatchPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=proposalId" })
  proposalId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=revisionNumber" })
  revisionNumber: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=updateAction" })
  updateAction: AdexchangebuyerProposalsPatchUpdateActionEnum;
}


export class AdexchangebuyerProposalsPatchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdexchangebuyerProposalsPatchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerProposalsPatchRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AdexchangebuyerProposalsPatchPathParams;

  @Metadata()
  queryParams: AdexchangebuyerProposalsPatchQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Proposal;

  @Metadata()
  security: AdexchangebuyerProposalsPatchSecurity;
}


export class AdexchangebuyerProposalsPatchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  proposal?: shared.Proposal;

  @Metadata()
  statusCode: number;
}
