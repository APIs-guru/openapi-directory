import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSectionsForTeacherPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSectionsForTeacherQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
}
export declare class GetSectionsForTeacherRequest extends SpeakeasyBase {
    pathParams: GetSectionsForTeacherPathParams;
    queryParams: GetSectionsForTeacherQueryParams;
}
export declare class GetSectionsForTeacherResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    sectionsResponse?: shared.SectionsResponse;
    statusCode: number;
}
