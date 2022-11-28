import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateTagOptionWithResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceAssociateTagOptionWithResource = "AWS242ServiceCatalogService.AssociateTagOptionWithResource"
}
export declare class AssociateTagOptionWithResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateTagOptionWithResourceXAmzTargetEnum;
}
export declare class AssociateTagOptionWithResourceRequest extends SpeakeasyBase {
    headers: AssociateTagOptionWithResourceHeaders;
    request: shared.AssociateTagOptionWithResourceInput;
}
export declare class AssociateTagOptionWithResourceResponse extends SpeakeasyBase {
    associateTagOptionWithResourceOutput?: Map<string, any>;
    contentType: string;
    duplicateResourceException?: any;
    invalidParametersException?: any;
    invalidStateException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
}
