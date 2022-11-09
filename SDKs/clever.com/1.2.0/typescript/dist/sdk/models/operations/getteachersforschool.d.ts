import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTeachersForSchoolPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTeachersForSchoolQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetTeachersForSchoolRequest extends SpeakeasyBase {
    pathParams: GetTeachersForSchoolPathParams;
    queryParams: GetTeachersForSchoolQueryParams;
}
export declare class GetTeachersForSchoolResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    teachersResponse?: shared.TeachersResponse;
}
