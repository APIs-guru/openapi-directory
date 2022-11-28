import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposPingWebhookPathParams extends SpeakeasyBase {
    hookId: number;
    owner: string;
    repo: string;
}
export declare class ReposPingWebhookRequest extends SpeakeasyBase {
    pathParams: ReposPingWebhookPathParams;
}
export declare class ReposPingWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
}
