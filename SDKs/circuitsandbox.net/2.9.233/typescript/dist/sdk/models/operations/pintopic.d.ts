import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PinTopicPathParams extends SpeakeasyBase {
    topicId: string;
}
export declare class PinTopicRequestBody extends SpeakeasyBase {
    position: number;
}
export declare class PinTopicSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class PinTopicRequest extends SpeakeasyBase {
    pathParams: PinTopicPathParams;
    request: PinTopicRequestBody;
    security: PinTopicSecurity;
}
export declare class PinTopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
