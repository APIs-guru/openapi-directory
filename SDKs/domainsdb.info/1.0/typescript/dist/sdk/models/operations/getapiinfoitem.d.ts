import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetApiInfoItemQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetApiInfoItemRequest extends SpeakeasyBase {
    queryParams: GetApiInfoItemQueryParams;
}
export declare class GetApiInfoItemResponse extends SpeakeasyBase {
    apiKeyInfo?: shared.ApiKeyInfo;
    contentType: string;
    statusCode: number;
}
