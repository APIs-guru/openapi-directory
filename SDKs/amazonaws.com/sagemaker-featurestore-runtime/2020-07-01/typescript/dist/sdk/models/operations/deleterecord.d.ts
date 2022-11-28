import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRecordPathParams extends SpeakeasyBase {
    featureGroupName: string;
}
export declare class DeleteRecordQueryParams extends SpeakeasyBase {
    eventTime: string;
    recordIdentifierValueAsString: string;
}
export declare class DeleteRecordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteRecordRequest extends SpeakeasyBase {
    pathParams: DeleteRecordPathParams;
    queryParams: DeleteRecordQueryParams;
    headers: DeleteRecordHeaders;
}
export declare class DeleteRecordResponse extends SpeakeasyBase {
    accessForbidden?: any;
    contentType: string;
    internalFailure?: any;
    serviceUnavailable?: any;
    statusCode: number;
    validationError?: any;
}
