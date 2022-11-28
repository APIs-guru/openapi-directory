import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnpinTopicPathParams extends SpeakeasyBase {
    topicId: string;
}
export declare class UnpinTopicSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UnpinTopicRequest extends SpeakeasyBase {
    pathParams: UnpinTopicPathParams;
    security: UnpinTopicSecurity;
}
export declare class UnpinTopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
