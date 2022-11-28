import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NoteGetNotesPathParams extends SpeakeasyBase {
    recipeId: number;
}
export declare class NoteGetNotesQueryParams extends SpeakeasyBase {
    pg?: number;
    rpp?: number;
}
export declare class NoteGetNotesRequest extends SpeakeasyBase {
    pathParams: NoteGetNotesPathParams;
    queryParams: NoteGetNotesQueryParams;
}
export declare class NoteGetNotesResponse extends SpeakeasyBase {
    bigOvenModelApiRecipeNoteList?: shared.BigOvenModelApiRecipeNoteList;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
