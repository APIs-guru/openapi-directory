import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisassociateDelegateFromResourceXAmzTargetEnum {
    WorkMailServiceDisassociateDelegateFromResource = "WorkMailService.DisassociateDelegateFromResource"
}
export declare class DisassociateDelegateFromResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateDelegateFromResourceXAmzTargetEnum;
}
export declare class DisassociateDelegateFromResourceRequest extends SpeakeasyBase {
    headers: DisassociateDelegateFromResourceHeaders;
    request: shared.DisassociateDelegateFromResourceRequest;
}
export declare class DisassociateDelegateFromResourceResponse extends SpeakeasyBase {
    contentType: string;
    disassociateDelegateFromResourceResponse?: Map<string, any>;
    entityNotFoundException?: any;
    entityStateException?: any;
    invalidParameterException?: any;
    organizationNotFoundException?: any;
    organizationStateException?: any;
    statusCode: number;
}
