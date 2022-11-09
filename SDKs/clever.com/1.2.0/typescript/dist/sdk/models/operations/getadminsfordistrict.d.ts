import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetAdminsForDistrictPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetAdminsForDistrictRequest extends SpeakeasyBase {
    pathParams: GetAdminsForDistrictPathParams;
}
export declare class GetAdminsForDistrictResponse extends SpeakeasyBase {
    contentType: string;
    districtAdminsResponse?: shared.DistrictAdminsResponse;
    notFound?: shared.NotFound;
    statusCode: number;
}
