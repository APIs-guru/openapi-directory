import { SpeakeasyBase } from "../../../internal/utils";
export declare class NoteDeletePathParams extends SpeakeasyBase {
    noteId: number;
    recipeId: number;
}
export declare class NoteDeleteRequest extends SpeakeasyBase {
    pathParams: NoteDeletePathParams;
}
export declare class NoteDeleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
