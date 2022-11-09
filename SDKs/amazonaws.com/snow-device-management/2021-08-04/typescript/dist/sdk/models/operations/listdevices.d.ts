import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDevicesQueryParams extends SpeakeasyBase {
    jobId?: string;
    maxResults?: number;
    nextToken?: string;
}
export declare class ListDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDevicesRequest extends SpeakeasyBase {
    queryParams: ListDevicesQueryParams;
    headers: ListDevicesHeaders;
}
export declare class ListDevicesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listDevicesOutput?: shared.ListDevicesOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
