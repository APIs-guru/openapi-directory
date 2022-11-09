import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListDatasetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListDatasetsXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceListDatasets = "AWSLookoutEquipmentFrontendService.ListDatasets"
}
export declare class ListDatasetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListDatasetsXAmzTargetEnum;
}
export declare class ListDatasetsRequest extends SpeakeasyBase {
    queryParams: ListDatasetsQueryParams;
    headers: ListDatasetsHeaders;
    request: shared.ListDatasetsRequest;
}
export declare class ListDatasetsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listDatasetsResponse?: shared.ListDatasetsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
