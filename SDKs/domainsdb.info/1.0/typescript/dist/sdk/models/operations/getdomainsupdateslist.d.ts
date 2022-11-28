import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainsUpdatesListQueryParams extends SpeakeasyBase {
    apiKey?: string;
}
export declare class GetDomainsUpdatesListRequest extends SpeakeasyBase {
    queryParams: GetDomainsUpdatesListQueryParams;
}
export declare class GetDomainsUpdatesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateModel?: shared.UpdateModel;
}
