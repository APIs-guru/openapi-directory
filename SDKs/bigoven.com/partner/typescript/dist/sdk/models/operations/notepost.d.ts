import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotePostPathParams extends SpeakeasyBase {
    recipeId: number;
}
export declare class NotePostRequests extends SpeakeasyBase {
    api2ControllersWebApiNoteControllerNoteRequest?: shared.Api2ControllersWebApiNoteControllerNoteRequest;
    api2ControllersWebApiNoteControllerNoteRequest1?: shared.Api2ControllersWebApiNoteControllerNoteRequest;
    api2ControllersWebApiNoteControllerNoteRequest2?: shared.Api2ControllersWebApiNoteControllerNoteRequest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class NotePostRequest extends SpeakeasyBase {
    pathParams: NotePostPathParams;
    request: NotePostRequests;
}
export declare class NotePostResponse extends SpeakeasyBase {
    bigOvenModelApi2RecipeNote?: shared.BigOvenModelApi2RecipeNote;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
