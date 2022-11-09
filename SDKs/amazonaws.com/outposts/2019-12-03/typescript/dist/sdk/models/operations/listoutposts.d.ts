import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListOutpostsQueryParams extends SpeakeasyBase {
    availabilityZoneFilter?: string[];
    availabilityZoneIdFilter?: string[];
    lifeCycleStatusFilter?: string[];
    maxResults?: number;
    nextToken?: string;
}
export declare class ListOutpostsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListOutpostsRequest extends SpeakeasyBase {
    queryParams: ListOutpostsQueryParams;
    headers: ListOutpostsHeaders;
}
export declare class ListOutpostsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listOutpostsOutput?: shared.ListOutpostsOutput;
    statusCode: number;
    validationException?: any;
}
