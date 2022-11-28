import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposReplaceAllTopicsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposReplaceAllTopicsRequestBody extends SpeakeasyBase {
    names: string[];
}
export declare class ReposReplaceAllTopics415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposReplaceAllTopicsRequest extends SpeakeasyBase {
    pathParams: ReposReplaceAllTopicsPathParams;
    request?: ReposReplaceAllTopicsRequestBody;
}
export declare class ReposReplaceAllTopicsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    reposReplaceAllTopics415ApplicationJsonObject?: ReposReplaceAllTopics415ApplicationJson;
    topic?: shared.Topic;
    validationErrorSimple?: shared.ValidationErrorSimple;
}
