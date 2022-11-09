import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GroupV2GetInvitedIndividualsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupId" })
  groupId: number;
}


export class GroupV2GetInvitedIndividualsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=currentpage" })
  currentpage: number;
}


export class GroupV2GetInvitedIndividualsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GroupV2GetInvitedIndividualsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GroupV2GetInvitedIndividualsPathParams;

  @Metadata()
  queryParams: GroupV2GetInvitedIndividualsQueryParams;

  @Metadata()
  security: GroupV2GetInvitedIndividualsSecurity;
}


export class GroupV2GetInvitedIndividualsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
