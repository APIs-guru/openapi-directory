import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NoteDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=noteId" })
  noteId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recipeId" })
  recipeId: number;
}


export class NoteDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NoteDeletePathParams;
}


export class NoteDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
