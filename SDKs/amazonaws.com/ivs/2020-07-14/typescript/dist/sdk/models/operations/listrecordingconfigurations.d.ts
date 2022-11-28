import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListRecordingConfigurationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListRecordingConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRecordingConfigurationsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListRecordingConfigurationsRequest extends SpeakeasyBase {
    queryParams: ListRecordingConfigurationsQueryParams;
    headers: ListRecordingConfigurationsHeaders;
    request: ListRecordingConfigurationsRequestBody;
}
export declare class ListRecordingConfigurationsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listRecordingConfigurationsResponse?: shared.ListRecordingConfigurationsResponse;
    statusCode: number;
    validationException?: any;
}
