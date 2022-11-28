import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveModeratorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=convId" })
  convId: string;
}


export class RemoveModeratorsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=moderators;" })
  moderators: string[];
}


export class RemoveModeratorsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RemoveModeratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveModeratorsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: RemoveModeratorsRequestBody;

  @SpeakeasyMetadata()
  security: RemoveModeratorsSecurity;
}


export class RemoveModeratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
