import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NoteDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=noteId" })
  noteId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class NoteDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NoteDeletePathParams;
}


export class NoteDeleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
