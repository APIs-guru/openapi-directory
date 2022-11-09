import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum GetAccountSettingsXAmzTargetEnum {
    AwsProton20200720GetAccountSettings = "AwsProton20200720.GetAccountSettings"
}
export declare class GetAccountSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAccountSettingsXAmzTargetEnum;
}
export declare class GetAccountSettingsRequest extends SpeakeasyBase {
    headers: GetAccountSettingsHeaders;
    request: Map<string, any>;
}
export declare class GetAccountSettingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getAccountSettingsOutput?: shared.GetAccountSettingsOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
