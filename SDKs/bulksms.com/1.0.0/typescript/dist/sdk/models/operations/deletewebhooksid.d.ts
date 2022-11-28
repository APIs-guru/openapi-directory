import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWebhooksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteWebhooksIdRequest extends SpeakeasyBase {
    pathParams: DeleteWebhooksIdPathParams;
}
export declare class DeleteWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
