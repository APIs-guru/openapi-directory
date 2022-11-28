import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssociateMemberAccountXAmzTargetEnum {
    MacieServiceAssociateMemberAccount = "MacieService.AssociateMemberAccount"
}
export declare class AssociateMemberAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateMemberAccountXAmzTargetEnum;
}
export declare class AssociateMemberAccountRequest extends SpeakeasyBase {
    headers: AssociateMemberAccountHeaders;
    request: shared.AssociateMemberAccountRequest;
}
export declare class AssociateMemberAccountResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    statusCode: number;
}
