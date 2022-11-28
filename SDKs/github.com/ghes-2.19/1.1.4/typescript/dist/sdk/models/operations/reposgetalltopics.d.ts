import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetAllTopicsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetAllTopicsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ReposGetAllTopics415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposGetAllTopicsRequest extends SpeakeasyBase {
    pathParams: ReposGetAllTopicsPathParams;
    queryParams: ReposGetAllTopicsQueryParams;
}
export declare class ReposGetAllTopicsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    reposGetAllTopics415ApplicationJsonObject?: ReposGetAllTopics415ApplicationJson;
    topic?: shared.Topic;
}
