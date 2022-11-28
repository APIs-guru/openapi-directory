import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOnwardJourneyPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetOnwardJourneyQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    rights: shared.RightsEnum;
}
export declare class GetOnwardJourneyRequest extends SpeakeasyBase {
    pathParams: GetOnwardJourneyPathParams;
    queryParams: GetOnwardJourneyQueryParams;
}
export declare class GetOnwardJourneyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
