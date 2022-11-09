import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NotePutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=noteId" })
  noteId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class NotePutRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  api2ControllersWebApiNoteControllerNoteRequest?: shared.Api2ControllersWebApiNoteControllerNoteRequest;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  api2ControllersWebApiNoteControllerNoteRequest1?: shared.Api2ControllersWebApiNoteControllerNoteRequest;

  @Metadata({ data: "request, media_type=text/json" })
  api2ControllersWebApiNoteControllerNoteRequest2?: shared.Api2ControllersWebApiNoteControllerNoteRequest;

  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;
}


export class NotePutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NotePutPathParams;

  @Metadata()
  request: NotePutRequests;
}


export class NotePutResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApiRecipeNote?: shared.BigOvenModelApiRecipeNote;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
