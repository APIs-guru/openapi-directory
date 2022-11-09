import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetBroadcastsByChannelPathParams extends SpeakeasyBase {
    channel: string;
}
export declare class GetBroadcastsByChannelQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    from?: string;
    lang: shared.LangEnum;
    mixin?: string[];
    perPage: number;
    rights: shared.RightsEnum;
}
export declare class GetBroadcastsByChannelRequest extends SpeakeasyBase {
    pathParams: GetBroadcastsByChannelPathParams;
    queryParams: GetBroadcastsByChannelQueryParams;
}
export declare class GetBroadcastsByChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
