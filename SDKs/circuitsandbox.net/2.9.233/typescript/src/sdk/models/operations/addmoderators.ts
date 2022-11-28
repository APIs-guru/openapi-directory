import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddModeratorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class AddModeratorsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=moderators;" })
  moderators: string[];
}


export class AddModeratorsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddModeratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddModeratorsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: AddModeratorsRequestBody;

  @SpeakeasyMetadata()
  security: AddModeratorsSecurity;
}


export class AddModeratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
