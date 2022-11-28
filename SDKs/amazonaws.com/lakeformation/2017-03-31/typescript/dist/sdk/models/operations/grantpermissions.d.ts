import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GrantPermissionsXAmzTargetEnum {
    AwsLakeFormationGrantPermissions = "AWSLakeFormation.GrantPermissions"
}
export declare class GrantPermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GrantPermissionsXAmzTargetEnum;
}
export declare class GrantPermissionsRequest extends SpeakeasyBase {
    headers: GrantPermissionsHeaders;
    request: shared.GrantPermissionsRequest;
}
export declare class GrantPermissionsResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    grantPermissionsResponse?: Map<string, any>;
    invalidInputException?: any;
    statusCode: number;
}
