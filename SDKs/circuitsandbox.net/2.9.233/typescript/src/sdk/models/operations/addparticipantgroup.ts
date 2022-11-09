import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddParticipantGroupPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class AddParticipantGroupRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=participants;" })
  participants: string[];
}


export class AddParticipantGroupSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddParticipantGroupRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddParticipantGroupPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddParticipantGroupRequestBody;

  @Metadata()
  security: AddParticipantGroupSecurity;
}


export class AddParticipantGroupResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  conversation?: any;

  @Metadata()
  statusCode: number;
}
