import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateMemberAccountXAmzTargetEnum {
    MacieServiceDisassociateMemberAccount = "MacieService.DisassociateMemberAccount"
}
export declare class DisassociateMemberAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateMemberAccountXAmzTargetEnum;
}
export declare class DisassociateMemberAccountRequest extends SpeakeasyBase {
    headers: DisassociateMemberAccountHeaders;
    request: shared.DisassociateMemberAccountRequest;
}
export declare class DisassociateMemberAccountResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    statusCode: number;
}
