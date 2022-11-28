import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetGetSuggestedFollowsAllQueryParams extends SpeakeasyBase {
    inOnboarding?: boolean;
    page?: number;
    pageSize?: number;
}
export declare class GetGetSuggestedFollowsAllRequest extends SpeakeasyBase {
    queryParams: GetGetSuggestedFollowsAllQueryParams;
}
export declare class GetGetSuggestedFollowsAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
