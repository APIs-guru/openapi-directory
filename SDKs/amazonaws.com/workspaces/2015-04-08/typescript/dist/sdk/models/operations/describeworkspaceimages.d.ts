import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeWorkspaceImagesXAmzTargetEnum {
    WorkspacesServiceDescribeWorkspaceImages = "WorkspacesService.DescribeWorkspaceImages"
}
export declare class DescribeWorkspaceImagesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkspaceImagesXAmzTargetEnum;
}
export declare class DescribeWorkspaceImagesRequest extends SpeakeasyBase {
    headers: DescribeWorkspaceImagesHeaders;
    request: shared.DescribeWorkspaceImagesRequest;
}
export declare class DescribeWorkspaceImagesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeWorkspaceImagesResult?: shared.DescribeWorkspaceImagesResult;
    statusCode: number;
}
