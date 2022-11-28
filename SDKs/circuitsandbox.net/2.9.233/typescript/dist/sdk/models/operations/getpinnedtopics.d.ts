import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPinnedTopicsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPinnedTopicsSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class GetPinnedTopicsRequest extends SpeakeasyBase {
    pathParams: GetPinnedTopicsPathParams;
    security: GetPinnedTopicsSecurity;
}
export declare class GetPinnedTopicsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    spacePinnedTopics?: any[];
    statusCode: number;
}
