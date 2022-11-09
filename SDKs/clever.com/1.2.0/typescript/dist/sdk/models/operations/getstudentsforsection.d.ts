import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetStudentsForSectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetStudentsForSectionQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
}
export declare class GetStudentsForSectionRequest extends SpeakeasyBase {
    pathParams: GetStudentsForSectionPathParams;
    queryParams: GetStudentsForSectionQueryParams;
}
export declare class GetStudentsForSectionResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    studentsResponse?: shared.StudentsResponse;
}
