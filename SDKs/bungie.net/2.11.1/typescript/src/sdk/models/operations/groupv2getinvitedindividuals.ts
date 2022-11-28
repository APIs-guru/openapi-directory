import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GroupV2GetInvitedIndividualsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetInvitedIndividualsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage: number;
}


export class GroupV2GetInvitedIndividualsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2GetInvitedIndividualsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GroupV2GetInvitedIndividualsPathParams;

  @SpeakeasyMetadata()
  queryParams: GroupV2GetInvitedIndividualsQueryParams;

  @SpeakeasyMetadata()
  security: GroupV2GetInvitedIndividualsSecurity;
}


export class GroupV2GetInvitedIndividualsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
