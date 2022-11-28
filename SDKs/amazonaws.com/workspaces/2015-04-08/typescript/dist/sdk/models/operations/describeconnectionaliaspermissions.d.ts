import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeConnectionAliasPermissionsXAmzTargetEnum {
    WorkspacesServiceDescribeConnectionAliasPermissions = "WorkspacesService.DescribeConnectionAliasPermissions"
}
export declare class DescribeConnectionAliasPermissionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionAliasPermissionsXAmzTargetEnum;
}
export declare class DescribeConnectionAliasPermissionsRequest extends SpeakeasyBase {
    headers: DescribeConnectionAliasPermissionsHeaders;
    request: shared.DescribeConnectionAliasPermissionsRequest;
}
export declare class DescribeConnectionAliasPermissionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeConnectionAliasPermissionsResult?: shared.DescribeConnectionAliasPermissionsResult;
    invalidParameterValuesException?: any;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
