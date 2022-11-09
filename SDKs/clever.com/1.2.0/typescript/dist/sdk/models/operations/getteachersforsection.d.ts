import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTeachersForSectionPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetTeachersForSectionQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
}
export declare class GetTeachersForSectionRequest extends SpeakeasyBase {
    pathParams: GetTeachersForSectionPathParams;
    queryParams: GetTeachersForSectionQueryParams;
}
export declare class GetTeachersForSectionResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    statusCode: number;
    teachersResponse?: shared.TeachersResponse;
}
