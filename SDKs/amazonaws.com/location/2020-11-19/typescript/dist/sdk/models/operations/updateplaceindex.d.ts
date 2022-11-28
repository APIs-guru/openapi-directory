import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePlaceIndexPathParams extends SpeakeasyBase {
    indexName: string;
}
export declare class UpdatePlaceIndexHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>Specifies the data storage option chosen for requesting Places.</p> <important> <p>When using Amazon Location Places:</p> <ul> <li> <p>If using HERE Technologies as a data provider, you can't store results for locations in Japan by setting <code>IntendedUse</code> to <code>Storage</code>. parameter.</p> </li> <li> <p>Under the <code>MobileAssetTracking</code> or <code>MobilAssetManagement</code> pricing plan, you can't store results from your place index resources by setting <code>IntendedUse</code> to <code>Storage</code>. This returns a validation exception error.</p> </li> </ul> <p>For more information, see the <a href="https://aws.amazon.com/service-terms/">AWS Service Terms</a> for Amazon Location Service.</p> </important>
**/
export declare class UpdatePlaceIndexRequestBodyDataSourceConfiguration extends SpeakeasyBase {
    intendedUse?: shared.IntendedUseEnum;
}
export declare enum UpdatePlaceIndexRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
export declare class UpdatePlaceIndexRequestBody extends SpeakeasyBase {
    dataSourceConfiguration?: UpdatePlaceIndexRequestBodyDataSourceConfiguration;
    description?: string;
    pricingPlan?: UpdatePlaceIndexRequestBodyPricingPlanEnum;
}
export declare class UpdatePlaceIndexRequest extends SpeakeasyBase {
    pathParams: UpdatePlaceIndexPathParams;
    headers: UpdatePlaceIndexHeaders;
    request: UpdatePlaceIndexRequestBody;
}
export declare class UpdatePlaceIndexResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    updatePlaceIndexResponse?: shared.UpdatePlaceIndexResponse;
    validationException?: any;
}
