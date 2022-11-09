import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GenerateDataSetXAmzTargetEnum {
    MarketplaceCommerceAnalytics20150701GenerateDataSet = "MarketplaceCommerceAnalytics20150701.GenerateDataSet"
}
export declare class GenerateDataSetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GenerateDataSetXAmzTargetEnum;
}
export declare class GenerateDataSetRequest extends SpeakeasyBase {
    headers: GenerateDataSetHeaders;
    request: shared.GenerateDataSetRequest;
}
export declare class GenerateDataSetResponse extends SpeakeasyBase {
    contentType: string;
    generateDataSetResult?: shared.GenerateDataSetResult;
    marketplaceCommerceAnalyticsException?: any;
    statusCode: number;
}
