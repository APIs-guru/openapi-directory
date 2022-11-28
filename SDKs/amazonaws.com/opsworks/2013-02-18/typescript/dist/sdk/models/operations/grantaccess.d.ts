import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GrantAccessXAmzTargetEnum {
    OpsWorks20130218GrantAccess = "OpsWorks_20130218.GrantAccess"
}
export declare class GrantAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GrantAccessXAmzTargetEnum;
}
export declare class GrantAccessRequest extends SpeakeasyBase {
    headers: GrantAccessHeaders;
    request: shared.GrantAccessRequest;
}
export declare class GrantAccessResponse extends SpeakeasyBase {
    contentType: string;
    grantAccessResult?: shared.GrantAccessResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
