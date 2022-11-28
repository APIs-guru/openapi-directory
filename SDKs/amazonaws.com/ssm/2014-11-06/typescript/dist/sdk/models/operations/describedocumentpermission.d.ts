import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeDocumentPermissionXAmzTargetEnum {
    AmazonSsmDescribeDocumentPermission = "AmazonSSM.DescribeDocumentPermission"
}
export declare class DescribeDocumentPermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeDocumentPermissionXAmzTargetEnum;
}
export declare class DescribeDocumentPermissionRequest extends SpeakeasyBase {
    headers: DescribeDocumentPermissionHeaders;
    request: shared.DescribeDocumentPermissionRequest;
}
export declare class DescribeDocumentPermissionResponse extends SpeakeasyBase {
    contentType: string;
    describeDocumentPermissionResponse?: shared.DescribeDocumentPermissionResponse;
    internalServerError?: any;
    invalidDocument?: any;
    invalidDocumentOperation?: any;
    invalidNextToken?: any;
    invalidPermissionType?: any;
    statusCode: number;
}
