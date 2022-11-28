import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeWorkforceXAmzTargetEnum {
    SageMakerDescribeWorkforce = "SageMaker.DescribeWorkforce"
}
export declare class DescribeWorkforceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeWorkforceXAmzTargetEnum;
}
export declare class DescribeWorkforceRequest extends SpeakeasyBase {
    headers: DescribeWorkforceHeaders;
    request: shared.DescribeWorkforceRequest;
}
export declare class DescribeWorkforceResponse extends SpeakeasyBase {
    contentType: string;
    describeWorkforceResponse?: shared.DescribeWorkforceResponse;
    statusCode: number;
}
