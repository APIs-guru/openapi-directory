import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateOpsItemXAmzTargetEnum {
    AmazonSsmUpdateOpsItem = "AmazonSSM.UpdateOpsItem"
}
export declare class UpdateOpsItemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateOpsItemXAmzTargetEnum;
}
export declare class UpdateOpsItemRequest extends SpeakeasyBase {
    headers: UpdateOpsItemHeaders;
    request: shared.UpdateOpsItemRequest;
}
export declare class UpdateOpsItemResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    opsItemAlreadyExistsException?: any;
    opsItemInvalidParameterException?: any;
    opsItemLimitExceededException?: any;
    opsItemNotFoundException?: any;
    statusCode: number;
    updateOpsItemResponse?: Map<string, any>;
}
