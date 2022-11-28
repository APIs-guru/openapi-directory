import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAppXAmzTargetEnum {
    OpsWorks20130218UpdateApp = "OpsWorks_20130218.UpdateApp"
}
export declare class UpdateAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAppXAmzTargetEnum;
}
export declare class UpdateAppRequest extends SpeakeasyBase {
    headers: UpdateAppHeaders;
    request: shared.UpdateAppRequest;
}
export declare class UpdateAppResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
