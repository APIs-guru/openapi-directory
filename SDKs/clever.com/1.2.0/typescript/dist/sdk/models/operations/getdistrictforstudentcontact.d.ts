import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDistrictForStudentContactPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistrictForStudentContactRequest extends SpeakeasyBase {
    pathParams: GetDistrictForStudentContactPathParams;
}
export declare class GetDistrictForStudentContactResponse extends SpeakeasyBase {
    contentType: string;
    districtResponse?: shared.DistrictResponse;
    notFound?: shared.NotFound;
    statusCode: number;
}
