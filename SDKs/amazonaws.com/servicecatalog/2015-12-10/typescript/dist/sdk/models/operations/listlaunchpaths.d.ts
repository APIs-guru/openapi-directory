import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLaunchPathsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListLaunchPathsXAmzTargetEnum {
    Aws242ServiceCatalogServiceListLaunchPaths = "AWS242ServiceCatalogService.ListLaunchPaths"
}
export declare class ListLaunchPathsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLaunchPathsXAmzTargetEnum;
}
export declare class ListLaunchPathsRequest extends SpeakeasyBase {
    queryParams: ListLaunchPathsQueryParams;
    headers: ListLaunchPathsHeaders;
    request: shared.ListLaunchPathsInput;
}
export declare class ListLaunchPathsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listLaunchPathsOutput?: shared.ListLaunchPathsOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
