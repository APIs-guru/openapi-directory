import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposTestPushWebhookPathParams extends SpeakeasyBase {
    hookId: number;
    owner: string;
    repo: string;
}
export declare class ReposTestPushWebhookRequest extends SpeakeasyBase {
    pathParams: ReposTestPushWebhookPathParams;
}
export declare class ReposTestPushWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
