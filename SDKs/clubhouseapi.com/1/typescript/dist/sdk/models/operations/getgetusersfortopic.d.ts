import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetGetUsersForTopicQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    topicId?: number;
}
export declare class GetGetUsersForTopicRequest extends SpeakeasyBase {
    queryParams: GetGetUsersForTopicQueryParams;
}
export declare class GetGetUsersForTopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
