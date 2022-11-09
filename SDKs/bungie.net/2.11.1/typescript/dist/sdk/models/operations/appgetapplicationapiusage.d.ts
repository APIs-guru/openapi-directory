import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AppGetApplicationApiUsagePathParams extends SpeakeasyBase {
    applicationId: number;
}
export declare class AppGetApplicationApiUsageQueryParams extends SpeakeasyBase {
    end?: Date;
    start?: Date;
}
export declare class AppGetApplicationApiUsageSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AppGetApplicationApiUsageRequest extends SpeakeasyBase {
    pathParams: AppGetApplicationApiUsagePathParams;
    queryParams: AppGetApplicationApiUsageQueryParams;
    security: AppGetApplicationApiUsageSecurity;
}
export declare class AppGetApplicationApiUsageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
