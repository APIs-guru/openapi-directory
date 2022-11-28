import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NotePutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=noteId" })
  noteId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class NotePutRequests extends SpeakeasyBase {
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


export class NotePutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NotePutPathParams;

  @SpeakeasyMetadata()
  request: NotePutRequests;
}


export class NotePutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApiRecipeNote?: shared.BigOvenModelApiRecipeNote;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
