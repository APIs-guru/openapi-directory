import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateOpsItemXAmzTargetEnum {
    AmazonSsmCreateOpsItem = "AmazonSSM.CreateOpsItem"
}
export declare class CreateOpsItemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateOpsItemXAmzTargetEnum;
}
export declare class CreateOpsItemRequest extends SpeakeasyBase {
    headers: CreateOpsItemHeaders;
    request: shared.CreateOpsItemRequest;
}
export declare class CreateOpsItemResponse extends SpeakeasyBase {
    contentType: string;
    createOpsItemResponse?: shared.CreateOpsItemResponse;
    internalServerError?: any;
    opsItemAlreadyExistsException?: any;
    opsItemInvalidParameterException?: any;
    opsItemLimitExceededException?: any;
    statusCode: number;
}
