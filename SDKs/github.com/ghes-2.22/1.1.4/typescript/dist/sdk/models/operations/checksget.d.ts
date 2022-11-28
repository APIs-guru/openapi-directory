import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChecksGetPathParams extends SpeakeasyBase {
    checkRunId: number;
    owner: string;
    repo: string;
}
export declare class ChecksGetRequest extends SpeakeasyBase {
    pathParams: ChecksGetPathParams;
}
export declare class ChecksGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkRun?: shared.CheckRun;
}
