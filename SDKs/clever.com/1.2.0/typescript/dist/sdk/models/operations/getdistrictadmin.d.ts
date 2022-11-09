import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDistrictAdminPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetDistrictAdminRequest extends SpeakeasyBase {
    pathParams: GetDistrictAdminPathParams;
}
export declare class GetDistrictAdminResponse extends SpeakeasyBase {
    contentType: string;
    districtAdminResponse?: shared.DistrictAdminResponse;
    notFound?: shared.NotFound;
    statusCode: number;
}
