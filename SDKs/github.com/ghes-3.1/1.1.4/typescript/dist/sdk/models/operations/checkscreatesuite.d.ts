import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChecksCreateSuitePathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ChecksCreateSuiteRequestBody extends SpeakeasyBase {
    headSha: string;
}
export declare class ChecksCreateSuiteRequest extends SpeakeasyBase {
    pathParams: ChecksCreateSuitePathParams;
    request?: ChecksCreateSuiteRequestBody;
}
export declare class ChecksCreateSuiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checkSuite?: shared.CheckSuite;
}
