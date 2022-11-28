import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCodeRepositoryXAmzTargetEnum {
    SageMakerDescribeCodeRepository = "SageMaker.DescribeCodeRepository"
}
export declare class DescribeCodeRepositoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCodeRepositoryXAmzTargetEnum;
}
export declare class DescribeCodeRepositoryRequest extends SpeakeasyBase {
    headers: DescribeCodeRepositoryHeaders;
    request: shared.DescribeCodeRepositoryInput;
}
export declare class DescribeCodeRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    describeCodeRepositoryOutput?: shared.DescribeCodeRepositoryOutput;
    statusCode: number;
}
