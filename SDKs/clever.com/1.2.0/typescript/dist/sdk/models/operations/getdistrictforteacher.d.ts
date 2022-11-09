import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDistrictForTeacherPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistrictForTeacherRequest extends SpeakeasyBase {
    pathParams: GetDistrictForTeacherPathParams;
}
export declare class GetDistrictForTeacherResponse extends SpeakeasyBase {
    contentType: string;
    districtResponse?: shared.DistrictResponse;
    notFound?: shared.NotFound;
    statusCode: number;
}
