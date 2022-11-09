import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWebhooksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetWebhooksIdRequest extends SpeakeasyBase {
    pathParams: GetWebhooksIdPathParams;
}
export declare class GetWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    webhook?: shared.Webhook;
}
