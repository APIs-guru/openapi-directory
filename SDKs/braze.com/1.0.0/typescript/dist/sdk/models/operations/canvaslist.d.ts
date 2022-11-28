import { SpeakeasyBase } from "../../../internal/utils";
export declare class CanvasListQueryParams extends SpeakeasyBase {
    includeArchived?: string;
    lastEditTimeGt?: string;
    page?: string;
    sortDirection?: string;
}
export declare class CanvasListRequest extends SpeakeasyBase {
    queryParams: CanvasListQueryParams;
}
export declare class CanvasListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
