import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTaskHeaders extends SpeakeasyBase {
    xEbayCMarketplaceId?: string;
}
export declare class CreateTaskSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class CreateTaskRequest extends SpeakeasyBase {
    headers: CreateTaskHeaders;
    request: shared.CreateTaskRequest;
    security: CreateTaskSecurity;
}
export declare class CreateTaskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
