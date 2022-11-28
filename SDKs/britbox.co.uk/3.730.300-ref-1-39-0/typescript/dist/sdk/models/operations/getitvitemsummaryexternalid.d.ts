import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItvItemsummaryExternalIdPathParams extends SpeakeasyBase {
    externalId: string;
}
export declare class GetItvItemsummaryExternalIdRequest extends SpeakeasyBase {
    pathParams: GetItvItemsummaryExternalIdPathParams;
}
export declare class GetItvItemsummaryExternalIdResponse extends SpeakeasyBase {
    contentType: string;
    getItvItemsummaryExternalId302ApplicationJsonObject?: Map<string, any>;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
