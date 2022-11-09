import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveModeratorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class RemoveModeratorsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=moderators;" })
  moderators: string[];
}


export class RemoveModeratorsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RemoveModeratorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveModeratorsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: RemoveModeratorsRequestBody;

  @Metadata()
  security: RemoveModeratorsSecurity;
}


export class RemoveModeratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
