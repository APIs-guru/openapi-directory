import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchNodesQueryParams extends SpeakeasyBase {
    depthLevel?: number;
    filter?: string;
    limit?: number;
    offset?: number;
    parentId?: number;
    searchString: string;
    sort?: string;
}
export declare class SearchNodesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class SearchNodesRequest extends SpeakeasyBase {
    queryParams: SearchNodesQueryParams;
    headers: SearchNodesHeaders;
}
export declare class SearchNodesResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    nodeList?: shared.NodeList;
    statusCode: number;
}
