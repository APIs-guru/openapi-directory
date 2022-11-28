import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSectionsForSchoolPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSectionsForSchoolQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetSectionsForSchoolRequest extends SpeakeasyBase {
    pathParams: GetSectionsForSchoolPathParams;
    queryParams: GetSectionsForSchoolQueryParams;
}
export declare class GetSectionsForSchoolResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    sectionsResponse?: shared.SectionsResponse;
    statusCode: number;
}
