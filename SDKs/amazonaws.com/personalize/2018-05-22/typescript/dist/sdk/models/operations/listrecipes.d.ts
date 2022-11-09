import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListRecipesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListRecipesXAmzTargetEnum {
    AmazonPersonalizeListRecipes = "AmazonPersonalize.ListRecipes"
}
export declare class ListRecipesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListRecipesXAmzTargetEnum;
}
export declare class ListRecipesRequest extends SpeakeasyBase {
    queryParams: ListRecipesQueryParams;
    headers: ListRecipesHeaders;
    request: shared.ListRecipesRequest;
}
export declare class ListRecipesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    listRecipesResponse?: shared.ListRecipesResponse;
    statusCode: number;
}
