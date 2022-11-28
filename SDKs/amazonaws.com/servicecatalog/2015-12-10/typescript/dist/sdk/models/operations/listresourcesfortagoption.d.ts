import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListResourcesForTagOptionQueryParams extends SpeakeasyBase {
    pageSize?: string;
    pageToken?: string;
}
export declare enum ListResourcesForTagOptionXAmzTargetEnum {
    Aws242ServiceCatalogServiceListResourcesForTagOption = "AWS242ServiceCatalogService.ListResourcesForTagOption"
}
export declare class ListResourcesForTagOptionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourcesForTagOptionXAmzTargetEnum;
}
export declare class ListResourcesForTagOptionRequest extends SpeakeasyBase {
    queryParams: ListResourcesForTagOptionQueryParams;
    headers: ListResourcesForTagOptionHeaders;
    request: shared.ListResourcesForTagOptionInput;
}
export declare class ListResourcesForTagOptionResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    listResourcesForTagOptionOutput?: shared.ListResourcesForTagOptionOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    tagOptionNotMigratedException?: any;
}
