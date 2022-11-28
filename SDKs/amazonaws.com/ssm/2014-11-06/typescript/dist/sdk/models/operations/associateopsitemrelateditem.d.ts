import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateOpsItemRelatedItemXAmzTargetEnum {
    AmazonSsmAssociateOpsItemRelatedItem = "AmazonSSM.AssociateOpsItemRelatedItem"
}
export declare class AssociateOpsItemRelatedItemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateOpsItemRelatedItemXAmzTargetEnum;
}
export declare class AssociateOpsItemRelatedItemRequest extends SpeakeasyBase {
    headers: AssociateOpsItemRelatedItemHeaders;
    request: shared.AssociateOpsItemRelatedItemRequest;
}
export declare class AssociateOpsItemRelatedItemResponse extends SpeakeasyBase {
    associateOpsItemRelatedItemResponse?: shared.AssociateOpsItemRelatedItemResponse;
    contentType: string;
    internalServerError?: any;
    opsItemInvalidParameterException?: any;
    opsItemLimitExceededException?: any;
    opsItemNotFoundException?: any;
    opsItemRelatedItemAlreadyExistsException?: any;
    statusCode: number;
}
