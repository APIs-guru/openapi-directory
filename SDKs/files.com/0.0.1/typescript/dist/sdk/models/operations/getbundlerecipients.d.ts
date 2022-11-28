import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBundleRecipientsQueryParams extends SpeakeasyBase {
    bundleId: number;
    cursor?: string;
    filter?: Map<string, any>;
    filterGt?: Map<string, any>;
    filterGteq?: Map<string, any>;
    filterLike?: Map<string, any>;
    filterLt?: Map<string, any>;
    filterLteq?: Map<string, any>;
    perPage?: number;
    sortBy?: Map<string, any>;
    userId?: number;
}
export declare class GetBundleRecipientsRequest extends SpeakeasyBase {
    queryParams: GetBundleRecipientsQueryParams;
}
export declare class GetBundleRecipientsResponse extends SpeakeasyBase {
    bundleRecipientEntities?: shared.BundleRecipientEntity[];
    contentType: string;
    statusCode: number;
}
