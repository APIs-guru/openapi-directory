import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTeachersForDistrictPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTeachersForDistrictQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetTeachersForDistrictRequest extends SpeakeasyBase {
    pathParams: GetTeachersForDistrictPathParams;
    queryParams: GetTeachersForDistrictQueryParams;
}
export declare class GetTeachersForDistrictResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    teachersResponse?: shared.TeachersResponse;
}
