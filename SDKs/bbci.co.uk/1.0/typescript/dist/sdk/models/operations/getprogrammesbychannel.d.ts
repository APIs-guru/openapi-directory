import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetProgrammesByChannelPathParams extends SpeakeasyBase {
    channel: string;
}
export declare class GetProgrammesByChannelQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    lang: shared.LangEnum;
    page: number;
    perPage: number;
    rights: shared.RightsEnum;
}
export declare class GetProgrammesByChannelRequest extends SpeakeasyBase {
    pathParams: GetProgrammesByChannelPathParams;
    queryParams: GetProgrammesByChannelQueryParams;
}
export declare class GetProgrammesByChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
