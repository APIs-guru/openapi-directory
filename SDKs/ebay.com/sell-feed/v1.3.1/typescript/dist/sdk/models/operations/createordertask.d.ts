import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateOrderTaskHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId?: string;
}
export declare class CreateOrderTaskSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateOrderTaskRequest extends SpeakeasyBase {
    headers: CreateOrderTaskHeaders;
    request: shared.CreateOrderTaskRequest;
    security: CreateOrderTaskSecurity;
}
export declare class CreateOrderTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
