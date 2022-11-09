import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PutRecordPathParams extends SpeakeasyBase {
    featureGroupName: string;
}
export declare class PutRecordHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutRecordRequestBody extends SpeakeasyBase {
    record: shared.FeatureValue[];
}
export declare class PutRecordRequest extends SpeakeasyBase {
    pathParams: PutRecordPathParams;
    headers: PutRecordHeaders;
    request: PutRecordRequestBody;
}
export declare class PutRecordResponse extends SpeakeasyBase {
    accessForbidden?: any;
    contentType: string;
    internalFailure?: any;
    serviceUnavailable?: any;
    statusCode: number;
    validationError?: any;
}
