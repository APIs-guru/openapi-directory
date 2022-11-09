import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeContainerXAmzTargetEnum {
    MediaStore20170901DescribeContainer = "MediaStore_20170901.DescribeContainer"
}
export declare class DescribeContainerHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeContainerXAmzTargetEnum;
}
export declare class DescribeContainerRequest extends SpeakeasyBase {
    headers: DescribeContainerHeaders;
    request: shared.DescribeContainerInput;
}
export declare class DescribeContainerResponse extends SpeakeasyBase {
    containerNotFoundException?: any;
    contentType: string;
    describeContainerOutput?: shared.DescribeContainerOutput;
    internalServerError?: any;
    statusCode: number;
}
