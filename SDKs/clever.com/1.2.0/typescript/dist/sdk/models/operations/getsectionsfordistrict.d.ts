import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetSectionsForDistrictPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSectionsForDistrictQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetSectionsForDistrictRequest extends SpeakeasyBase {
    pathParams: GetSectionsForDistrictPathParams;
    queryParams: GetSectionsForDistrictQueryParams;
}
export declare class GetSectionsForDistrictResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: shared.NotFound;
    sectionsResponse?: shared.SectionsResponse;
    statusCode: number;
}
