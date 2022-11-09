import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetClipsPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetClipsQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    rights: shared.RightsEnum;
}
export declare class GetClipsRequest extends SpeakeasyBase {
    pathParams: GetClipsPathParams;
    queryParams: GetClipsQueryParams;
}
export declare class GetClipsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
