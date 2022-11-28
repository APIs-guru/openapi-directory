import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeSlotPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    intentId: string;
    localeId: string;
    slotId: string;
}
export declare class DescribeSlotHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSlotRequest extends SpeakeasyBase {
    pathParams: DescribeSlotPathParams;
    headers: DescribeSlotHeaders;
}
export declare class DescribeSlotResponse extends SpeakeasyBase {
    contentType: string;
    describeSlotResponse?: shared.DescribeSlotResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
