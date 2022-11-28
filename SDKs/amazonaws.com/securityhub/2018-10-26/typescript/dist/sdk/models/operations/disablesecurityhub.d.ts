import { SpeakeasyBase } from "../../../internal/utils";
export declare class DisableSecurityHubHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DisableSecurityHubRequest extends SpeakeasyBase {
    headers: DisableSecurityHubHeaders;
}
export declare class DisableSecurityHubResponse extends SpeakeasyBase {
    contentType: string;
    disableSecurityHubResponse?: Map<string, any>;
    internalException?: any;
    invalidAccessException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
