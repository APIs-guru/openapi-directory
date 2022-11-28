import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class NoteGetNotesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class NoteGetNotesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class NoteGetNotesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NoteGetNotesPathParams;

  @SpeakeasyMetadata()
  queryParams: NoteGetNotesQueryParams;
}


export class NoteGetNotesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bigOvenModelApiRecipeNoteList?: shared.BigOvenModelApiRecipeNoteList;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
