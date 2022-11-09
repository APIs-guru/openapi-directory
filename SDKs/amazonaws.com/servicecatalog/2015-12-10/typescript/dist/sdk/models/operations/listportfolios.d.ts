import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPortfoliosQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListPortfoliosXAmzTargetEnum {
    Aws242ServiceCatalogServiceListPortfolios = "AWS242ServiceCatalogService.ListPortfolios"
}
export declare class ListPortfoliosHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListPortfoliosXAmzTargetEnum;
}
export declare class ListPortfoliosRequest extends SpeakeasyBase {
    queryParams: ListPortfoliosQueryParams;
    headers: ListPortfoliosHeaders;
    request: shared.ListPortfoliosInput;
}
export declare class ListPortfoliosResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listPortfoliosOutput?: shared.ListPortfoliosOutput;
    statusCode: number;
}
