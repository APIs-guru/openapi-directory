import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AppsListPlansQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class AppsListPlansRequest extends SpeakeasyBase {
    queryParams: AppsListPlansQueryParams;
}
export declare class AppsListPlansResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    marketplaceListingPlans?: shared.MarketplaceListingPlan[];
}
