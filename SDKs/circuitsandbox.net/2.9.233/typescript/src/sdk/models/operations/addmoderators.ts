import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddModeratorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class AddModeratorsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=moderators;" })
  moderators: string[];
}


export class AddModeratorsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddModeratorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddModeratorsPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddModeratorsRequestBody;

  @Metadata()
  security: AddModeratorsSecurity;
}


export class AddModeratorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
