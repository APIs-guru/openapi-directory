import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateStackXAmzTargetEnum {
    OpsWorks20130218CreateStack = "OpsWorks_20130218.CreateStack"
}
export declare class CreateStackHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateStackXAmzTargetEnum;
}
export declare class CreateStackRequest extends SpeakeasyBase {
    headers: CreateStackHeaders;
    request: shared.CreateStackRequest;
}
export declare class CreateStackResponse extends SpeakeasyBase {
    contentType: string;
    createStackResult?: shared.CreateStackResult;
    statusCode: number;
    validationException?: any;
}
