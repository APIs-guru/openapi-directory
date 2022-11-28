import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetQualificationScoreXAmzTargetEnum {
    MTurkRequesterServiceV20170117GetQualificationScore = "MTurkRequesterServiceV20170117.GetQualificationScore"
}
export declare class GetQualificationScoreHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetQualificationScoreXAmzTargetEnum;
}
export declare class GetQualificationScoreRequest extends SpeakeasyBase {
    headers: GetQualificationScoreHeaders;
    request: shared.GetQualificationScoreRequest;
}
export declare class GetQualificationScoreResponse extends SpeakeasyBase {
    contentType: string;
    getQualificationScoreResponse?: shared.GetQualificationScoreResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
