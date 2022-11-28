import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemDownloadablesQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetItemDownloadablesRequest extends SpeakeasyBase {
    queryParams: GetItemDownloadablesQueryParams;
    request: shared.ItemDownloadableRequest;
}
export declare class GetItemDownloadablesResponse extends SpeakeasyBase {
    contentType: string;
    itemDownloadableList?: shared.ItemDownloadableList;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
