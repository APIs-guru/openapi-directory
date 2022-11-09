import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetProgrammeByPidPathParams extends SpeakeasyBase {
    pid: string;
}
export declare class GetProgrammeByPidQueryParams extends SpeakeasyBase {
    availability: shared.AvailabilityEnum;
    mixin?: string[];
    rights: shared.RightsEnum;
}
export declare class GetProgrammeByPidRequest extends SpeakeasyBase {
    pathParams: GetProgrammeByPidPathParams;
    queryParams: GetProgrammeByPidQueryParams;
}
export declare class GetProgrammeByPidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ibl?: any;
}
