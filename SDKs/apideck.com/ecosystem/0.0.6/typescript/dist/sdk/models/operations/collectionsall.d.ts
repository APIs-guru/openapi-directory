import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CollectionsAllPathParams extends SpeakeasyBase {
    ecosystemId: string;
}
export declare class CollectionsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare class CollectionsAllRequest extends SpeakeasyBase {
    pathParams: CollectionsAllPathParams;
    queryParams: CollectionsAllQueryParams;
}
export declare class CollectionsAllResponse extends SpeakeasyBase {
    contentType: string;
    getCollectionsResponse?: shared.GetCollectionsResponse;
    statusCode: number;
}
