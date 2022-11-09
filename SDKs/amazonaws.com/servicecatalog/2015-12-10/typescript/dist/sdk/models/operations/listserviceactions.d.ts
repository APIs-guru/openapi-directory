import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListServiceActionsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListServiceActionsXAmzTargetEnum {
    Aws242ServiceCatalogServiceListServiceActions = "AWS242ServiceCatalogService.ListServiceActions"
}
export declare class ListServiceActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServiceActionsXAmzTargetEnum;
}
export declare class ListServiceActionsRequest extends SpeakeasyBase {
    queryParams: ListServiceActionsQueryParams;
    headers: ListServiceActionsHeaders;
    request: shared.ListServiceActionsInput;
}
export declare class ListServiceActionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listServiceActionsOutput?: shared.ListServiceActionsOutput;
    statusCode: number;
}
