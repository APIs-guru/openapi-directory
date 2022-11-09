import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class V2RemoveParticipantsFromSpacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class V2RemoveParticipantsFromSpaceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=userIds;" })
  userIds: string[];
}


export class V2RemoveParticipantsFromSpaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class V2RemoveParticipantsFromSpaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: V2RemoveParticipantsFromSpacePathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: V2RemoveParticipantsFromSpaceRequestBody;

  @Metadata()
  security: V2RemoveParticipantsFromSpaceSecurity;
}


export class V2RemoveParticipantsFromSpaceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
