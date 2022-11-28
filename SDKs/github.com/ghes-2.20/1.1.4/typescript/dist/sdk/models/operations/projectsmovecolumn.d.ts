import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsMoveColumnPathParams extends SpeakeasyBase {
    columnId: number;
}
export declare class ProjectsMoveColumnRequestBody extends SpeakeasyBase {
    position: string;
}
export declare class ProjectsMoveColumnRequest extends SpeakeasyBase {
    pathParams: ProjectsMoveColumnPathParams;
    request?: ProjectsMoveColumnRequestBody;
}
export declare class ProjectsMoveColumnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectsMoveColumn201ApplicationJsonObject?: Map<string, any>;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
