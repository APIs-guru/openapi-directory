import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSectionsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    limit?: number;
    startingAfter?: string;
    where?: string;
}
export declare class GetSectionsRequest extends SpeakeasyBase {
    queryParams: GetSectionsQueryParams;
}
export declare class GetSectionsResponse extends SpeakeasyBase {
    contentType: string;
    sectionsResponse?: shared.SectionsResponse;
    statusCode: number;
}
