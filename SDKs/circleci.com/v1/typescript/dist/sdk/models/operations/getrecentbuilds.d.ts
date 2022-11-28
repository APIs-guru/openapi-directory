import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecentBuildsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetRecentBuildsRequest extends SpeakeasyBase {
    queryParams: GetRecentBuildsQueryParams;
}
export declare class GetRecentBuildsResponse extends SpeakeasyBase {
    builds?: shared.Build[];
    contentType: string;
    statusCode: number;
}
