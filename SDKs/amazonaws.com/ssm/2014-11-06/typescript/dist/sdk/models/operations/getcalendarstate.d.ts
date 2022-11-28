import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCalendarStateXAmzTargetEnum {
    AmazonSsmGetCalendarState = "AmazonSSM.GetCalendarState"
}
export declare class GetCalendarStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCalendarStateXAmzTargetEnum;
}
export declare class GetCalendarStateRequest extends SpeakeasyBase {
    headers: GetCalendarStateHeaders;
    request: shared.GetCalendarStateRequest;
}
export declare class GetCalendarStateResponse extends SpeakeasyBase {
    contentType: string;
    getCalendarStateResponse?: shared.GetCalendarStateResponse;
    internalServerError?: any;
    invalidDocument?: any;
    invalidDocumentType?: any;
    statusCode: number;
    unsupportedCalendarException?: any;
}
