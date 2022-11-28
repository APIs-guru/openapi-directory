import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHighlightsByChannelPathParams extends SpeakeasyBase {
    channel: string;
}
export declare class GetHighlightsByChannelQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    lang: shared.LangEnum;
    live?: boolean;
    mixin?: string[];
    rights: shared.RightsEnum;
}
export declare class GetHighlightsByChannelRequest extends SpeakeasyBase {
    pathParams: GetHighlightsByChannelPathParams;
    queryParams: GetHighlightsByChannelQueryParams;
}
export declare class GetHighlightsByChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
