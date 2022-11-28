import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeProductAsAdminXAmzTargetEnum {
    Aws242ServiceCatalogServiceDescribeProductAsAdmin = "AWS242ServiceCatalogService.DescribeProductAsAdmin"
}
export declare class DescribeProductAsAdminHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeProductAsAdminXAmzTargetEnum;
}
export declare class DescribeProductAsAdminRequest extends SpeakeasyBase {
    headers: DescribeProductAsAdminHeaders;
    request: shared.DescribeProductAsAdminInput;
}
export declare class DescribeProductAsAdminResponse extends SpeakeasyBase {
    contentType: string;
    describeProductAsAdminOutput?: shared.DescribeProductAsAdminOutput;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
