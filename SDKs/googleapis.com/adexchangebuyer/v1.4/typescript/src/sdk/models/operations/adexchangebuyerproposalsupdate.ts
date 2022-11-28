import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AdexchangebuyerProposalsUpdateUpdateActionEnum {
    Accept = "accept",
    Cancel = "cancel",
    Propose = "propose",
    ProposeAndAccept = "proposeAndAccept",
    UnknownAction = "unknownAction",
    UpdateNonTerms = "updateNonTerms"
}


export class AdexchangebuyerProposalsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=proposalId" })
  proposalId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=revisionNumber" })
  revisionNumber: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=updateAction" })
  updateAction: AdexchangebuyerProposalsUpdateUpdateActionEnum;
}


export class AdexchangebuyerProposalsUpdateQueryParams extends SpeakeasyBase {
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


export class AdexchangebuyerProposalsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class AdexchangebuyerProposalsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AdexchangebuyerProposalsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: AdexchangebuyerProposalsUpdateQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Proposal;

  @SpeakeasyMetadata()
  security: AdexchangebuyerProposalsUpdateSecurity;
}


export class AdexchangebuyerProposalsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  proposal?: shared.Proposal;

  @SpeakeasyMetadata()
  statusCode: number;
}
