import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OrgsListQueryParams extends SpeakeasyBase {
    perPage?: number;
    since?: number;
}
export declare class OrgsListRequest extends SpeakeasyBase {
    queryParams: OrgsListQueryParams;
}
export declare class OrgsListResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    organizationSimples?: shared.OrganizationSimple[];
}
