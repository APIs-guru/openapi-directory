import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetEpisodesByParentPidPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetEpisodesByParentPidQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    initialChildCount: number;
    rights: shared.RightsEnum;
}
export declare class GetEpisodesByParentPidRequest extends SpeakeasyBase {
    pathParams: GetEpisodesByParentPidPathParams;
    queryParams: GetEpisodesByParentPidQueryParams;
}
export declare class GetEpisodesByParentPidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
