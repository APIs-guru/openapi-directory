import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum StartSupportDataExportXAmzTargetEnum {
    MarketplaceCommerceAnalytics20150701StartSupportDataExport = "MarketplaceCommerceAnalytics20150701.StartSupportDataExport"
}
export declare class StartSupportDataExportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartSupportDataExportXAmzTargetEnum;
}
export declare class StartSupportDataExportRequest extends SpeakeasyBase {
    headers: StartSupportDataExportHeaders;
    request: shared.StartSupportDataExportRequest;
}
export declare class StartSupportDataExportResponse extends SpeakeasyBase {
    contentType: string;
    marketplaceCommerceAnalyticsException?: any;
    startSupportDataExportResult?: shared.StartSupportDataExportResult;
    statusCode: number;
}
