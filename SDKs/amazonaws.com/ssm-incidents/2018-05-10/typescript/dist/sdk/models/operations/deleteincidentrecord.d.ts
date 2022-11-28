import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteIncidentRecordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteIncidentRecordRequestBody extends SpeakeasyBase {
    arn: string;
}
export declare class DeleteIncidentRecordRequest extends SpeakeasyBase {
    headers: DeleteIncidentRecordHeaders;
    request: DeleteIncidentRecordRequestBody;
}
export declare class DeleteIncidentRecordResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteIncidentRecordOutput?: Map<string, any>;
    internalServerException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
