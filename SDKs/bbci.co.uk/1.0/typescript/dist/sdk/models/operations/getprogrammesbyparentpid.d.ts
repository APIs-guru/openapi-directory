import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProgrammesByParentPidPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetProgrammesByParentPidQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    initialChildCount: number;
    rights: shared.RightsEnum;
}
export declare class GetProgrammesByParentPidRequest extends SpeakeasyBase {
    pathParams: GetProgrammesByParentPidPathParams;
    queryParams: GetProgrammesByParentPidQueryParams;
}
export declare class GetProgrammesByParentPidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
