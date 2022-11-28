import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTrailersPreRollsPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetTrailersPreRollsQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    rights: shared.RightsEnum;
}
export declare class GetTrailersPreRollsRequest extends SpeakeasyBase {
    pathParams: GetTrailersPreRollsPathParams;
    queryParams: GetTrailersPreRollsQueryParams;
}
export declare class GetTrailersPreRollsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
