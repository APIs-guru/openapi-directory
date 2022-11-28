import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsUpdatePathParams extends SpeakeasyBase {
    gistId: string;
}
export declare class GistsUpdateRequestBodyFiles extends SpeakeasyBase {
    content?: string;
    filename?: string;
}
export declare class GistsUpdateRequestBody extends SpeakeasyBase {
    description?: string;
    files?: Map<string, GistsUpdateRequestBodyFiles>;
}
export declare class GistsUpdateRequest extends SpeakeasyBase {
    pathParams: GistsUpdatePathParams;
    request?: GistsUpdateRequestBody;
}
export declare class GistsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    gistSimple?: shared.GistSimple;
    validationError?: shared.ValidationError;
}
