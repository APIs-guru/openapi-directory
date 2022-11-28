import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RevokePermissionsXAmzTargetEnum {
    AwsLakeFormationRevokePermissions = "AWSLakeFormation.RevokePermissions"
}
export declare class RevokePermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RevokePermissionsXAmzTargetEnum;
}
export declare class RevokePermissionsRequest extends SpeakeasyBase {
    headers: RevokePermissionsHeaders;
    request: shared.RevokePermissionsRequest;
}
export declare class RevokePermissionsResponse extends SpeakeasyBase {
    concurrentModificationException?: any;
    contentType: string;
    entityNotFoundException?: any;
    invalidInputException?: any;
    revokePermissionsResponse?: Map<string, any>;
    statusCode: number;
}
