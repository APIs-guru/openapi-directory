import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GistsCreateRequestBodyFiles extends SpeakeasyBase {
    content: string;
}
export declare enum GistsCreateRequestBodyPublic2Enum {
    True = "true",
    False = "false"
}
export declare class GistsCreateRequestBody extends SpeakeasyBase {
    description?: string;
    files: Map<string, GistsCreateRequestBodyFiles>;
    public?: any;
}
export declare class GistsCreateRequest extends SpeakeasyBase {
    request?: GistsCreateRequestBody;
}
export declare class GistsCreateResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    gistSimple?: shared.GistSimple;
    validationError?: shared.ValidationError;
}
