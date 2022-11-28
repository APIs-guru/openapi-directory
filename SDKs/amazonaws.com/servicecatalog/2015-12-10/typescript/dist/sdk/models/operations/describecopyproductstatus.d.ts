import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCopyProductStatusXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeCopyProductStatus = "AWS242ServiceCatalogService.DescribeCopyProductStatus"
}
export declare class DescribeCopyProductStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCopyProductStatusXAmzTargetEnum;
}
export declare class DescribeCopyProductStatusRequest extends SpeakeasyBase {
    headers: DescribeCopyProductStatusHeaders;
    request: shared.DescribeCopyProductStatusInput;
}
export declare class DescribeCopyProductStatusResponse extends SpeakeasyBase {
    contentType: string;
    describeCopyProductStatusOutput?: shared.DescribeCopyProductStatusOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
