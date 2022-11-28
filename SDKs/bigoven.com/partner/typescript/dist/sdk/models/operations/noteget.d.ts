import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NoteGetPathParams extends SpeakeasyBase {
    noteId: number;
    recipeId: number;
}
export declare class NoteGetRequest extends SpeakeasyBase {
    pathParams: NoteGetPathParams;
}
export declare class NoteGetResponse extends SpeakeasyBase {
    bigOvenModelApiRecipeNote?: shared.BigOvenModelApiRecipeNote;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
