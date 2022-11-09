import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateMapHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies the map tile style selected from an available provider.
**/
export declare class CreateMapRequestBodyConfiguration extends SpeakeasyBase {
    style?: string;
}
export declare enum CreateMapRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
export declare class CreateMapRequestBody extends SpeakeasyBase {
    configuration: CreateMapRequestBodyConfiguration;
    description?: string;
    mapName: string;
    pricingPlan: CreateMapRequestBodyPricingPlanEnum;
    tags?: Map<string, string>;
}
export declare class CreateMapRequest extends SpeakeasyBase {
    headers: CreateMapHeaders;
    request: CreateMapRequestBody;
}
export declare class CreateMapResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createMapResponse?: shared.CreateMapResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
