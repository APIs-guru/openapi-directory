import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreatePlaceIndexHeaders extends SpeakeasyBase {
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
export declare class CreatePlaceIndexRequestBodyDataSourceConfiguration extends SpeakeasyBase {
    intendedUse?: shared.IntendedUseEnum;
}
export declare enum CreatePlaceIndexRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
export declare class CreatePlaceIndexRequestBody extends SpeakeasyBase {
    dataSource: string;
    dataSourceConfiguration?: CreatePlaceIndexRequestBodyDataSourceConfiguration;
    description?: string;
    indexName: string;
    pricingPlan: CreatePlaceIndexRequestBodyPricingPlanEnum;
    tags?: Map<string, string>;
}
export declare class CreatePlaceIndexRequest extends SpeakeasyBase {
    headers: CreatePlaceIndexHeaders;
    request: CreatePlaceIndexRequestBody;
}
export declare class CreatePlaceIndexResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createPlaceIndexResponse?: shared.CreatePlaceIndexResponse;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
