import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NoteGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=noteId" })
  noteId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class NoteGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NoteGetPathParams;
}


export class NoteGetResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApiRecipeNote?: shared.BigOvenModelApiRecipeNote;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
