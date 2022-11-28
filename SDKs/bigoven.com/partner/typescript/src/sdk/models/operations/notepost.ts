import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NotePostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class NotePostRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiNoteControllerNoteRequest?: shared.Api2ControllersWebApiNoteControllerNoteRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiNoteControllerNoteRequest1?: shared.Api2ControllersWebApiNoteControllerNoteRequest;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiNoteControllerNoteRequest2?: shared.Api2ControllersWebApiNoteControllerNoteRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class NotePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NotePostPathParams;

  @SpeakeasyMetadata()
  request: NotePostRequests;
}


export class NotePostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApi2RecipeNote?: shared.BigOvenModelApi2RecipeNote;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
