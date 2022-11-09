import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NoteGetNotesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class NoteGetNotesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class NoteGetNotesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NoteGetNotesPathParams;

  @Metadata()
  queryParams: NoteGetNotesQueryParams;
}


export class NoteGetNotesResponse extends SpeakeasyBase {
  @Metadata()
  bigOvenModelApiRecipeNoteList?: shared.BigOvenModelApiRecipeNoteList;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
