import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveParticipantGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class RemoveParticipantGroupQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=participants" })
  participants: string[];
}


export class RemoveParticipantGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RemoveParticipantGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveParticipantGroupPathParams;

  @Metadata()
  queryParams: RemoveParticipantGroupQueryParams;

  @Metadata()
  security: RemoveParticipantGroupSecurity;
}


export class RemoveParticipantGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversation?: any;

  @Metadata()
  statusCode: number;
}
