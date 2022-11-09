import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDistrictAdminsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    showLinks?: string;
    startingAfter?: string;
}
export declare class GetDistrictAdminsRequest extends SpeakeasyBase {
    queryParams: GetDistrictAdminsQueryParams;
}
export declare class GetDistrictAdminsResponse extends SpeakeasyBase {
    contentType: string;
    districtAdminsResponse?: shared.DistrictAdminsResponse;
    statusCode: number;
}
