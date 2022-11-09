import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetV3BoardsQueryParams extends SpeakeasyBase {
    boardRelationship?: shared.BoardRelationshipEnum;
    page?: number;
    pageSize?: number;
    sortOrder?: shared.BoardSortOrderEnum;
}
export declare class GetV3BoardsRequest extends SpeakeasyBase {
    queryParams: GetV3BoardsQueryParams;
}
export declare class GetV3BoardsResponse extends SpeakeasyBase {
    boardList?: shared.BoardList;
    contentType: string;
    statusCode: number;
}
