import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeSeverityLevelsXAmzTargetEnum {
    AwsSupport20130415DescribeSeverityLevels = "AWSSupport_20130415.DescribeSeverityLevels"
}
export declare class DescribeSeverityLevelsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSeverityLevelsXAmzTargetEnum;
}
export declare class DescribeSeverityLevelsRequest extends SpeakeasyBase {
    headers: DescribeSeverityLevelsHeaders;
    request: shared.DescribeSeverityLevelsRequest;
}
export declare class DescribeSeverityLevelsResponse extends SpeakeasyBase {
    contentType: string;
    describeSeverityLevelsResponse?: shared.DescribeSeverityLevelsResponse;
    internalServerError?: any;
    statusCode: number;
}
