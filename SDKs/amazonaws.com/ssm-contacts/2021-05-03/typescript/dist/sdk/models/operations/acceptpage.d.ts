import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AcceptPageXAmzTargetEnum {
    SsmContactsAcceptPage = "SSMContacts.AcceptPage"
}
export declare class AcceptPageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptPageXAmzTargetEnum;
}
export declare class AcceptPageRequest extends SpeakeasyBase {
    headers: AcceptPageHeaders;
    request: shared.AcceptPageRequest;
}
export declare class AcceptPageResponse extends SpeakeasyBase {
    acceptPageResult?: Map<string, any>;
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
