import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateFilterXAmzTargetEnum {
    AmazonPersonalizeCreateFilter = "AmazonPersonalize.CreateFilter"
}
export declare class CreateFilterHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFilterXAmzTargetEnum;
}
export declare class CreateFilterRequest extends SpeakeasyBase {
    headers: CreateFilterHeaders;
    request: shared.CreateFilterRequest;
}
export declare class CreateFilterResponse extends SpeakeasyBase {
    contentType: string;
    createFilterResponse?: shared.CreateFilterResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
