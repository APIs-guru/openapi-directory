import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProjectsMoveCardPathParams extends SpeakeasyBase {
    cardId: number;
}
export declare class ProjectsMoveCardRequestBody extends SpeakeasyBase {
    columnId?: number;
    position: string;
}
export declare class ProjectsMoveCard403ApplicationJsonErrors extends SpeakeasyBase {
    code?: string;
    field?: string;
    message?: string;
    resource?: string;
}
export declare class ProjectsMoveCard403ApplicationJson extends SpeakeasyBase {
    documentationUrl?: string;
    errors?: ProjectsMoveCard403ApplicationJsonErrors[];
    message?: string;
}
export declare class ProjectsMoveCard503ApplicationJsonErrors extends SpeakeasyBase {
    code?: string;
    message?: string;
}
export declare class ProjectsMoveCard503ApplicationJson extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    errors?: ProjectsMoveCard503ApplicationJsonErrors[];
    message?: string;
}
export declare class ProjectsMoveCardRequest extends SpeakeasyBase {
    pathParams: ProjectsMoveCardPathParams;
    request?: ProjectsMoveCardRequestBody;
}
export declare class ProjectsMoveCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    projectsMoveCard201ApplicationJsonObject?: Map<string, any>;
    projectsMoveCard403ApplicationJsonObject?: ProjectsMoveCard403ApplicationJson;
    projectsMoveCard503ApplicationJsonObject?: ProjectsMoveCard503ApplicationJson;
    validationError?: shared.ValidationError;
}
