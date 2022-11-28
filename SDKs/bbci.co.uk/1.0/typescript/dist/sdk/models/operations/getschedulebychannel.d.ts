import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetScheduleByChannelPathParams extends SpeakeasyBase {
    channel: string;
    date: string;
}
export declare class GetScheduleByChannelQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    lang: shared.LangEnum;
    rights: shared.RightsEnum;
}
export declare class GetScheduleByChannelRequest extends SpeakeasyBase {
    pathParams: GetScheduleByChannelPathParams;
    queryParams: GetScheduleByChannelQueryParams;
}
export declare class GetScheduleByChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
