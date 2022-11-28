import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NoteGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=noteId" })
  noteId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class NoteGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NoteGetPathParams;
}


export class NoteGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApiRecipeNote?: shared.BigOvenModelApiRecipeNote;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
