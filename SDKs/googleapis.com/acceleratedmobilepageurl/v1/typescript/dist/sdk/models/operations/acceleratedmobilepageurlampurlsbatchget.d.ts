import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AcceleratedmobilepageurlAmpUrlsBatchGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class AcceleratedmobilepageurlAmpUrlsBatchGetRequest extends SpeakeasyBase {
    queryParams: AcceleratedmobilepageurlAmpUrlsBatchGetQueryParams;
    request?: shared.BatchGetAmpUrlsRequest;
}
export declare class AcceleratedmobilepageurlAmpUrlsBatchGetResponse extends SpeakeasyBase {
    batchGetAmpUrlsResponse?: shared.BatchGetAmpUrlsResponse;
    contentType: string;
    statusCode: number;
}
