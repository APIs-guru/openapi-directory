import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChecksGetSuitePathParams extends SpeakeasyBase {
    checkSuiteId: number;
    owner: string;
    repo: string;
}
export declare class ChecksGetSuiteRequest extends SpeakeasyBase {
    pathParams: ChecksGetSuitePathParams;
}
export declare class ChecksGetSuiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkSuite?: shared.CheckSuite;
}
