import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListOrganizationPortfolioAccessQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListOrganizationPortfolioAccessXAmzTargetEnum {
    Aws242ServiceCatalogServiceListOrganizationPortfolioAccess = "AWS242ServiceCatalogService.ListOrganizationPortfolioAccess"
}
export declare class ListOrganizationPortfolioAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListOrganizationPortfolioAccessXAmzTargetEnum;
}
export declare class ListOrganizationPortfolioAccessRequest extends SpeakeasyBase {
    queryParams: ListOrganizationPortfolioAccessQueryParams;
    headers: ListOrganizationPortfolioAccessHeaders;
    request: shared.ListOrganizationPortfolioAccessInput;
}
export declare class ListOrganizationPortfolioAccessResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listOrganizationPortfolioAccessOutput?: shared.ListOrganizationPortfolioAccessOutput;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
