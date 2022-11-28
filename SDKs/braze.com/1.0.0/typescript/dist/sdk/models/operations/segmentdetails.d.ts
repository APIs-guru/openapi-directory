import { SpeakeasyBase } from "../../../internal/utils";
export declare class SegmentDetailsQueryParams extends SpeakeasyBase {
    segmentId?: string;
}
export declare class SegmentDetailsRequest extends SpeakeasyBase {
    queryParams: SegmentDetailsQueryParams;
}
export declare class SegmentDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
