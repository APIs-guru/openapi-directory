import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FunctionsCreateTagPathParams extends SpeakeasyBase {
    functionId: string;
}
export declare class FunctionsCreateTagRequestBody extends SpeakeasyBase {
    code: string;
    command: string;
}
export declare class FunctionsCreateTagSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class FunctionsCreateTagRequest extends SpeakeasyBase {
    pathParams: FunctionsCreateTagPathParams;
    request?: FunctionsCreateTagRequestBody;
    security: FunctionsCreateTagSecurity;
}
export declare class FunctionsCreateTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tag?: shared.Tag;
}
