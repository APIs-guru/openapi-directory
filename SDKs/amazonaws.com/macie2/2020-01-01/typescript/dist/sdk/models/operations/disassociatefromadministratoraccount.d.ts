import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisassociateFromAdministratorAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateFromAdministratorAccountRequest extends SpeakeasyBase {
    headers: DisassociateFromAdministratorAccountHeaders;
}
export declare class DisassociateFromAdministratorAccountResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    disassociateFromAdministratorAccountResponse?: Map<string, any>;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
