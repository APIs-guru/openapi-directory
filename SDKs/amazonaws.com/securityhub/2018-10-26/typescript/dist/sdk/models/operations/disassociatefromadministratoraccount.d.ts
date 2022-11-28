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
    contentType: string;
    disassociateFromAdministratorAccountResponse?: Map<string, any>;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
