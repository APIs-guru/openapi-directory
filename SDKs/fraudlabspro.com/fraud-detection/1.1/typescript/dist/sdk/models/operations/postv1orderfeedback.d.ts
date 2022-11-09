import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostV1OrderFeedbackActionEnum {
    Approve = "APPROVE",
    Reject = "REJECT",
    RejectBlacklist = "REJECT_BLACKLIST"
}
export declare enum PostV1OrderFeedbackFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class PostV1OrderFeedbackQueryParams extends SpeakeasyBase {
    action: PostV1OrderFeedbackActionEnum;
    format?: PostV1OrderFeedbackFormatEnum;
    id: string;
    key: string;
    notes?: string;
}
export declare class PostV1OrderFeedbackRequest extends SpeakeasyBase {
    queryParams: PostV1OrderFeedbackQueryParams;
}
export declare class PostV1OrderFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    postV1OrderFeedback200ApplicationJsonString?: string;
    statusCode: number;
}
