import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum PostExternalEventsRequestBodyStatusEnum {
    Success = "success",
    Error = "error",
    PartialFailure = "partial_failure"
}
export declare class PostExternalEventsRequestBody extends SpeakeasyBase {
    body: string;
    status: PostExternalEventsRequestBodyStatusEnum;
}
export declare class PostExternalEventsRequest extends SpeakeasyBase {
    request: PostExternalEventsRequestBody;
}
export declare class PostExternalEventsResponse extends SpeakeasyBase {
    contentType: string;
    externalEventEntity?: shared.ExternalEventEntity;
    statusCode: number;
}
