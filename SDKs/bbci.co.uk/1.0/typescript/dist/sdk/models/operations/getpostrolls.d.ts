import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPostRollsPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetPostRollsQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    rights: shared.RightsEnum;
}
export declare class GetPostRollsRequest extends SpeakeasyBase {
    pathParams: GetPostRollsPathParams;
    queryParams: GetPostRollsQueryParams;
}
export declare class GetPostRollsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
