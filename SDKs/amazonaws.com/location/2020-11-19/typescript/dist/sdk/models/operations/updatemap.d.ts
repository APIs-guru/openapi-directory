import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateMapPathParams extends SpeakeasyBase {
    mapName: string;
}
export declare class UpdateMapHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum UpdateMapRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
export declare class UpdateMapRequestBody extends SpeakeasyBase {
    description?: string;
    pricingPlan?: UpdateMapRequestBodyPricingPlanEnum;
}
export declare class UpdateMapRequest extends SpeakeasyBase {
    pathParams: UpdateMapPathParams;
    headers: UpdateMapHeaders;
    request: UpdateMapRequestBody;
}
export declare class UpdateMapResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updateMapResponse?: shared.UpdateMapResponse;
    validationException?: any;
}
