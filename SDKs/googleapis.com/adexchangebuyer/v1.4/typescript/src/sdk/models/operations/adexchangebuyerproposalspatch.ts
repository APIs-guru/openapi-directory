import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AdexchangebuyerProposalsPatchUpdateActionEnum {
    Accept = "accept",
    Cancel = "cancel",
    Propose = "propose",
    ProposeAndAccept = "proposeAndAccept",
    UnknownAction = "unknownAction",
    UpdateNonTerms = "updateNonTerms"
}


export class AdexchangebuyerProposalsPatchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" })
  proposalId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revisionNumber" })
  revisionNumber: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=updateAction" })
  updateAction: AdexchangebuyerProposalsPatchUpdateActionEnum;
}


export class AdexchangebuyerProposalsPatchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;
}


export class AdexchangebuyerProposalsPatchSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerProposalsPatchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AdexchangebuyerProposalsPatchPathParams;

  @SpeakeasyMetadata()
  queryParams: AdexchangebuyerProposalsPatchQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Proposal;

  @SpeakeasyMetadata()
  security: AdexchangebuyerProposalsPatchSecurity;
}


export class AdexchangebuyerProposalsPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  proposal?: shared.Proposal;

  @SpeakeasyMetadata()
  statusCode: number;
}
