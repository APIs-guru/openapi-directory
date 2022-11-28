import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSectionsForProjectPathParams extends SpeakeasyBase {
    projectGid: string;
}
export declare class GetSectionsForProjectQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: string;
    optFields?: string[];
    optPretty?: boolean;
}
export declare class GetSectionsForProject200ApplicationJson extends SpeakeasyBase {
    data?: shared.SectionCompact[];
}
export declare class GetSectionsForProjectRequest extends SpeakeasyBase {
    pathParams: GetSectionsForProjectPathParams;
    queryParams: GetSectionsForProjectQueryParams;
}
export declare class GetSectionsForProjectResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    getSectionsForProject200ApplicationJsonObject?: GetSectionsForProject200ApplicationJson;
}
