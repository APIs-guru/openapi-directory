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
    contentType: string;
    disassociateFromMasterAccountResponse?: Map<string, any>;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
