import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnableSecurityHubHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class EnableSecurityHubRequestBody extends SpeakeasyBase {
    enableDefaultStandards?: boolean;
    tags?: Map<string, string>;
}
export declare class EnableSecurityHubRequest extends SpeakeasyBase {
    headers: EnableSecurityHubHeaders;
    request: EnableSecurityHubRequestBody;
}
export declare class EnableSecurityHubResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    enableSecurityHubResponse?: Map<string, any>;
    internalException?: any;
    invalidAccessException?: any;
    limitExceededException?: any;
    resourceConflictException?: any;
    statusCode: number;
}
