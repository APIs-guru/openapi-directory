import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFeatureFlagPathParams extends SpeakeasyBase {
    feature: string;
}
export declare class GetFeatureFlagQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class GetFeatureFlagRequest extends SpeakeasyBase {
    pathParams: GetFeatureFlagPathParams;
    queryParams: GetFeatureFlagQueryParams;
}
export declare class GetFeatureFlagResponse extends SpeakeasyBase {
    contentType: string;
    itvFeatureFlag?: shared.ItvFeatureFlag;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
