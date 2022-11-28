import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NotePutPathParams extends SpeakeasyBase {
    noteId: number;
    recipeId: number;
}
export declare class NotePutRequests extends SpeakeasyBase {
    api2ControllersWebApiNoteControllerNoteRequest?: shared.Api2ControllersWebApiNoteControllerNoteRequest;
    api2ControllersWebApiNoteControllerNoteRequest1?: shared.Api2ControllersWebApiNoteControllerNoteRequest;
    api2ControllersWebApiNoteControllerNoteRequest2?: shared.Api2ControllersWebApiNoteControllerNoteRequest;
    applicationXml: Uint8Array;
    textXml: Uint8Array;
}
export declare class NotePutRequest extends SpeakeasyBase {
    pathParams: NotePutPathParams;
    request: NotePutRequests;
}
export declare class NotePutResponse extends SpeakeasyBase {
    bigOvenModelApiRecipeNote?: shared.BigOvenModelApiRecipeNote;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
