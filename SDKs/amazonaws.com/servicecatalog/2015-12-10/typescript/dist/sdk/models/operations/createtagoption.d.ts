import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceCreateTagOption = "AWS242ServiceCatalogService.CreateTagOption"
}
export declare class CreateTagOptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTagOptionXAmzTargetEnum;
}
export declare class CreateTagOptionRequest extends SpeakeasyBase {
    headers: CreateTagOptionHeaders;
    request: shared.CreateTagOptionInput;
}
export declare class CreateTagOptionResponse extends SpeakeasyBase {
    contentType: string;
    createTagOptionOutput?: shared.CreateTagOptionOutput;
    duplicateResourceException?: any;
    limitExceededException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
}
