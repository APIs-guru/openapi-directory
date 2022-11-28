import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListBudgetsForResourceQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListBudgetsForResourceXAmzTargetEnum {
    Aws242ServiceCatalogServiceListBudgetsForResource = "AWS242ServiceCatalogService.ListBudgetsForResource"
}
export declare class ListBudgetsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListBudgetsForResourceXAmzTargetEnum;
}
export declare class ListBudgetsForResourceRequest extends SpeakeasyBase {
    queryParams: ListBudgetsForResourceQueryParams;
    headers: ListBudgetsForResourceHeaders;
    request: shared.ListBudgetsForResourceInput;
}
export declare class ListBudgetsForResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listBudgetsForResourceOutput?: shared.ListBudgetsForResourceOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
