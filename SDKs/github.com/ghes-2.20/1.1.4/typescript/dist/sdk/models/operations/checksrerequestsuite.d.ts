import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChecksRerequestSuitePathParams extends SpeakeasyBase {
    checkSuiteId: number;
    owner: string;
    repo: string;
}
export declare class ChecksRerequestSuiteRequest extends SpeakeasyBase {
    pathParams: ChecksRerequestSuitePathParams;
}
export declare class ChecksRerequestSuiteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    checksRerequestSuite201ApplicationJsonObject?: Map<string, any>;
}
