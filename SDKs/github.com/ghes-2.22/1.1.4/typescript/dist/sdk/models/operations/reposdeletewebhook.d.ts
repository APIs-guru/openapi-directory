import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposDeleteWebhookPathParams extends SpeakeasyBase {
    hookId: number;
    owner: string;
    repo: string;
}
export declare class ReposDeleteWebhookRequest extends SpeakeasyBase {
    pathParams: ReposDeleteWebhookPathParams;
}
export declare class ReposDeleteWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
