import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetWebhookPathParams extends SpeakeasyBase {
    hookId: number;
    owner: string;
    repo: string;
}
export declare class ReposGetWebhookRequest extends SpeakeasyBase {
    pathParams: ReposGetWebhookPathParams;
}
export declare class ReposGetWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    hook?: shared.Hook;
}
