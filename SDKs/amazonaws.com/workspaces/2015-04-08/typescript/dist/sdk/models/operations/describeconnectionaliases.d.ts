import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeConnectionAliasesXAmzTargetEnum {
    WorkspacesServiceDescribeConnectionAliases = "WorkspacesService.DescribeConnectionAliases"
}
export declare class DescribeConnectionAliasesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeConnectionAliasesXAmzTargetEnum;
}
export declare class DescribeConnectionAliasesRequest extends SpeakeasyBase {
    headers: DescribeConnectionAliasesHeaders;
    request: shared.DescribeConnectionAliasesRequest;
}
export declare class DescribeConnectionAliasesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeConnectionAliasesResult?: shared.DescribeConnectionAliasesResult;
    invalidParameterValuesException?: any;
    operationNotSupportedException?: any;
    statusCode: number;
}
