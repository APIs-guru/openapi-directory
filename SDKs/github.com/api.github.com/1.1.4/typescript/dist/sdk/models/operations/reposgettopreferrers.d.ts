import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReposGetTopReferrersPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ReposGetTopReferrersRequest extends SpeakeasyBase {
    pathParams: ReposGetTopReferrersPathParams;
}
export declare class ReposGetTopReferrersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    basicError?: shared.BasicError;
    referrerTraffics?: shared.ReferrerTraffic[];
}
