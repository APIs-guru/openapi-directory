import { SpeakeasyBase } from "../../../internal/utils";
export declare class TopicClassificationRequestBody extends SpeakeasyBase {
    apiKey: string;
    text?: string;
}
export declare class TopicClassificationRequest extends SpeakeasyBase {
    request?: TopicClassificationRequestBody;
}
export declare class TopicClassificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
