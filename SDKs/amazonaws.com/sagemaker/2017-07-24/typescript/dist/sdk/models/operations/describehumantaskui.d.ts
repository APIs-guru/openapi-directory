import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeHumanTaskUiXAmzTargetEnum {
    SageMakerDescribeHumanTaskUi = "SageMaker.DescribeHumanTaskUi"
}
export declare class DescribeHumanTaskUiHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeHumanTaskUiXAmzTargetEnum;
}
export declare class DescribeHumanTaskUiRequest extends SpeakeasyBase {
    headers: DescribeHumanTaskUiHeaders;
    request: shared.DescribeHumanTaskUiRequest;
}
export declare class DescribeHumanTaskUiResponse extends SpeakeasyBase {
    contentType: string;
    describeHumanTaskUiResponse?: shared.DescribeHumanTaskUiResponse;
    resourceNotFound?: any;
    statusCode: number;
}
