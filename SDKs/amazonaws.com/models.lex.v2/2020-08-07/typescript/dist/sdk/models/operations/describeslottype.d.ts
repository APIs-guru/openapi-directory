import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeSlotTypePathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    localeId: string;
    slotTypeId: string;
}
export declare class DescribeSlotTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeSlotTypeRequest extends SpeakeasyBase {
    pathParams: DescribeSlotTypePathParams;
    headers: DescribeSlotTypeHeaders;
}
export declare class DescribeSlotTypeResponse extends SpeakeasyBase {
    contentType: string;
    describeSlotTypeResponse?: shared.DescribeSlotTypeResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
