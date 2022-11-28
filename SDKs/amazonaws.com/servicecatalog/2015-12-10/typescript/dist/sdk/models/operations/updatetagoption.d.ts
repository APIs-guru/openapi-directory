import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateTagOption = "AWS242ServiceCatalogService.UpdateTagOption"
}
export declare class UpdateTagOptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTagOptionXAmzTargetEnum;
}
export declare class UpdateTagOptionRequest extends SpeakeasyBase {
    headers: UpdateTagOptionHeaders;
    request: shared.UpdateTagOptionInput;
}
export declare class UpdateTagOptionResponse extends SpeakeasyBase {
    contentType: string;
    duplicateResourceException?: any;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
    updateTagOptionOutput?: shared.UpdateTagOptionOutput;
}
