import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateAccountSettingsXAmzTargetEnum {
    AwsProton20200720UpdateAccountSettings = "AwsProton20200720.UpdateAccountSettings"
}
export declare class UpdateAccountSettingsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAccountSettingsXAmzTargetEnum;
}
export declare class UpdateAccountSettingsRequest extends SpeakeasyBase {
    headers: UpdateAccountSettingsHeaders;
    request: shared.UpdateAccountSettingsInput;
}
export declare class UpdateAccountSettingsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    updateAccountSettingsOutput?: shared.UpdateAccountSettingsOutput;
    validationException?: any;
}
