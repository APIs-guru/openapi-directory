import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class V2RemoveParticipantsFromSpacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class V2RemoveParticipantsFromSpaceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=userIds;" })
  userIds: string[];
}


export class V2RemoveParticipantsFromSpaceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class V2RemoveParticipantsFromSpaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: V2RemoveParticipantsFromSpacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: V2RemoveParticipantsFromSpaceRequestBody;

  @SpeakeasyMetadata()
  security: V2RemoveParticipantsFromSpaceSecurity;
}


export class V2RemoveParticipantsFromSpaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
