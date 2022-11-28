import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisassociateMembersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisassociateMembersRequestBody extends SpeakeasyBase {
    accountIds: string[];
}
export declare class DisassociateMembersRequest extends SpeakeasyBase {
    headers: DisassociateMembersHeaders;
    request: DisassociateMembersRequestBody;
}
export declare class DisassociateMembersResponse extends SpeakeasyBase {
    contentType: string;
    disassociateMembersResponse?: Map<string, any>;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
