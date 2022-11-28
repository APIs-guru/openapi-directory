import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSectionsForStudentPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSectionsForStudentQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
}
export declare class GetSectionsForStudentRequest extends SpeakeasyBase {
    pathParams: GetSectionsForStudentPathParams;
    queryParams: GetSectionsForStudentQueryParams;
}
export declare class GetSectionsForStudentResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    sectionsResponse?: shared.SectionsResponse;
    statusCode: number;
}
