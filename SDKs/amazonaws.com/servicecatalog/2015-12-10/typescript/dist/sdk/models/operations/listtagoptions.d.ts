import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListTagOptionsQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListTagOptionsXAmzTargetEnum {
    Aws242ServiceCatalogServiceListTagOptions = "AWS242ServiceCatalogService.ListTagOptions"
}
export declare class ListTagOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagOptionsXAmzTargetEnum;
}
export declare class ListTagOptionsRequest extends SpeakeasyBase {
    queryParams: ListTagOptionsQueryParams;
    headers: ListTagOptionsHeaders;
    request: shared.ListTagOptionsInput;
}
export declare class ListTagOptionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listTagOptionsOutput?: shared.ListTagOptionsOutput;
    statusCode: number;
    tagOptionNotMigratedException?: any;
}
