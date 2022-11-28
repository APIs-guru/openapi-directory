import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeArtifactXAmzTargetEnum {
    SageMakerDescribeArtifact = "SageMaker.DescribeArtifact"
}
export declare class DescribeArtifactHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeArtifactXAmzTargetEnum;
}
export declare class DescribeArtifactRequest extends SpeakeasyBase {
    headers: DescribeArtifactHeaders;
    request: shared.DescribeArtifactRequest;
}
export declare class DescribeArtifactResponse extends SpeakeasyBase {
    contentType: string;
    describeArtifactResponse?: shared.DescribeArtifactResponse;
    resourceNotFound?: any;
    statusCode: number;
}
