import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateOpsItemRelatedItemXAmzTargetEnum {
    AmazonSsmDisassociateOpsItemRelatedItem = "AmazonSSM.DisassociateOpsItemRelatedItem"
}
export declare class DisassociateOpsItemRelatedItemHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateOpsItemRelatedItemXAmzTargetEnum;
}
export declare class DisassociateOpsItemRelatedItemRequest extends SpeakeasyBase {
    headers: DisassociateOpsItemRelatedItemHeaders;
    request: shared.DisassociateOpsItemRelatedItemRequest;
}
export declare class DisassociateOpsItemRelatedItemResponse extends SpeakeasyBase {
    contentType: string;
    disassociateOpsItemRelatedItemResponse?: Map<string, any>;
    internalServerError?: any;
    opsItemInvalidParameterException?: any;
    opsItemNotFoundException?: any;
    opsItemRelatedItemAssociationNotFoundException?: any;
    statusCode: number;
}
