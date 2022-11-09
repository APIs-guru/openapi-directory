import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPortfolioAccessQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListPortfolioAccessXAmzTargetEnum {
    Aws242ServiceCatalogServiceListPortfolioAccess = "AWS242ServiceCatalogService.ListPortfolioAccess"
}
export declare class ListPortfolioAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPortfolioAccessXAmzTargetEnum;
}
export declare class ListPortfolioAccessRequest extends SpeakeasyBase {
    queryParams: ListPortfolioAccessQueryParams;
    headers: ListPortfolioAccessHeaders;
    request: shared.ListPortfolioAccessInput;
}
export declare class ListPortfolioAccessResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listPortfolioAccessOutput?: shared.ListPortfolioAccessOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
