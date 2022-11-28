import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistrictForStudentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistrictForStudentRequest extends SpeakeasyBase {
    pathParams: GetDistrictForStudentPathParams;
}
export declare class GetDistrictForStudentResponse extends SpeakeasyBase {
    contentType: string;
    districtResponse?: shared.DistrictResponse;
    notFound?: shared.NotFound;
    statusCode: number;
}
