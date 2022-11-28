import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeProjectQueryParams extends SpeakeasyBase {
    projectId: string;
    syncFromResources?: boolean;
}
export declare class DescribeProjectHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeProjectRequest extends SpeakeasyBase {
    queryParams: DescribeProjectQueryParams;
    headers: DescribeProjectHeaders;
}
export declare class DescribeProjectResponse extends SpeakeasyBase {
    badRequestException?: shared.BadRequestException;
    contentType: string;
    describeProjectResult?: shared.DescribeProjectResult;
    internalFailureException?: shared.InternalFailureException;
    notFoundException?: shared.NotFoundException;
    serviceUnavailableException?: shared.ServiceUnavailableException;
    statusCode: number;
    tooManyRequestsException?: shared.TooManyRequestsException;
    unauthorizedException?: shared.UnauthorizedException;
}
