import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlanPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPlanQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetPlanRequest extends SpeakeasyBase {
    pathParams: GetPlanPathParams;
    queryParams: GetPlanQueryParams;
}
export declare class GetPlanResponse extends SpeakeasyBase {
    contentType: string;
    eePlanListItem?: shared.EePlanListItem;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
