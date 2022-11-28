import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIncidentRecordQueryParams extends SpeakeasyBase {
    arn: string;
}
export declare class GetIncidentRecordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetIncidentRecordRequest extends SpeakeasyBase {
    queryParams: GetIncidentRecordQueryParams;
    headers: GetIncidentRecordHeaders;
}
export declare class GetIncidentRecordResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getIncidentRecordOutput?: shared.GetIncidentRecordOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
