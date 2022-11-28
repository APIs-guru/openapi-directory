import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSchedulesQueryParams extends SpeakeasyBase {
    channels: string[];
    date: Date;
    device?: string;
    duration: number;
    ff?: shared.FeatureFlagsEnum[];
    hour: number;
    intersect?: boolean;
    lang?: string;
    segments?: string[];
    sub?: string;
}
export declare class GetSchedulesRequest extends SpeakeasyBase {
    queryParams: GetSchedulesQueryParams;
}
export declare class GetSchedulesResponse extends SpeakeasyBase {
    contentType: string;
    itemScheduleLists?: shared.ItemScheduleList[];
    serviceError?: shared.ServiceError;
    statusCode: number;
}
