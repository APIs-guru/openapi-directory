import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisassociateFromMasterAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateFromMasterAccountRequest extends SpeakeasyBase {
    headers: DisassociateFromMasterAccountHeaders;
}
export declare class DisassociateFromMasterAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    disassociateFromMasterAccountResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
