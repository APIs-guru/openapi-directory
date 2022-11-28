import { SpeakeasyBase } from "../../../internal/utils";
export declare class SegmentListQueryParams extends SpeakeasyBase {
    page?: string;
    sortDirection?: string;
}
export declare class SegmentListRequest extends SpeakeasyBase {
    queryParams: SegmentListQueryParams;
}
export declare class SegmentListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
