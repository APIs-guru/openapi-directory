import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddParticipantGroupPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class AddParticipantGroupRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=participants;" })
  participants: string[];
}


export class AddParticipantGroupSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddParticipantGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddParticipantGroupPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddParticipantGroupRequestBody;

  @SpeakeasyMetadata()
  security: AddParticipantGroupSecurity;
}


export class AddParticipantGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  conversation?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
