import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListConfigurationSetsQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: string;
}
export declare class ListConfigurationSetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListConfigurationSetsRequest extends SpeakeasyBase {
    queryParams: ListConfigurationSetsQueryParams;
    headers: ListConfigurationSetsHeaders;
}
export declare class ListConfigurationSetsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    internalServiceErrorException?: any;
    listConfigurationSetsResponse?: shared.ListConfigurationSetsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
