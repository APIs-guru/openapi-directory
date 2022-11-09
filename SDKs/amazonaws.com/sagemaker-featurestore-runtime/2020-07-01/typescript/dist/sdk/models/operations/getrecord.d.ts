import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRecordPathParams extends SpeakeasyBase {
    featureGroupName: string;
}
export declare class GetRecordQueryParams extends SpeakeasyBase {
    featureName?: string[];
    recordIdentifierValueAsString: string;
}
export declare class GetRecordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRecordRequest extends SpeakeasyBase {
    pathParams: GetRecordPathParams;
    queryParams: GetRecordQueryParams;
    headers: GetRecordHeaders;
}
export declare class GetRecordResponse extends SpeakeasyBase {
    accessForbidden?: any;
    contentType: string;
    getRecordResponse?: shared.GetRecordResponse;
    internalFailure?: any;
    resourceNotFound?: any;
    serviceUnavailable?: any;
    statusCode: number;
    validationError?: any;
}
