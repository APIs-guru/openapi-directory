import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItvPlansPlatformPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class GetItvPlansPlatformQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetItvPlansPlatformSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetItvPlansPlatformRequest extends SpeakeasyBase {
    pathParams: GetItvPlansPlatformPathParams;
    queryParams: GetItvPlansPlatformQueryParams;
    security: GetItvPlansPlatformSecurity;
}
export declare class GetItvPlansPlatformResponse extends SpeakeasyBase {
    contentType: string;
    itvPlans?: shared.ItvPlans;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
