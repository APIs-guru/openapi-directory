import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlanByTokenPathParams extends SpeakeasyBase {
    token: string;
}
export declare class GetPlanByTokenQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetPlanByTokenRequest extends SpeakeasyBase {
    pathParams: GetPlanByTokenPathParams;
    queryParams: GetPlanByTokenQueryParams;
}
export declare class GetPlanByTokenResponse extends SpeakeasyBase {
    btPlanListItem?: shared.BtPlanListItem;
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
