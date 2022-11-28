import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateInventoryTaskHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId?: string;
}
export declare class CreateInventoryTaskSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateInventoryTaskRequest extends SpeakeasyBase {
    headers: CreateInventoryTaskHeaders;
    request: shared.CreateInventoryTaskRequest;
    security: CreateInventoryTaskSecurity;
}
export declare class CreateInventoryTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
