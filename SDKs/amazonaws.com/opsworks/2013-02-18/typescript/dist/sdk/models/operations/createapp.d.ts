import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateAppXAmzTargetEnum {
    OpsWorks20130218CreateApp = "OpsWorks_20130218.CreateApp"
}
export declare class CreateAppHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAppXAmzTargetEnum;
}
export declare class CreateAppRequest extends SpeakeasyBase {
    headers: CreateAppHeaders;
    request: shared.CreateAppRequest;
}
export declare class CreateAppResponse extends SpeakeasyBase {
    contentType: string;
    createAppResult?: shared.CreateAppResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
