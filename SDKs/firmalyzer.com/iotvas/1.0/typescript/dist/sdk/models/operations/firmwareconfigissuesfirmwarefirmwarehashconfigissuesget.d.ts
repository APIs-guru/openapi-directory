import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams extends SpeakeasyBase {
    firmwareHash: string;
}
export declare class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity extends SpeakeasyBase {
    apiKeyHeader: shared.SchemeApiKeyHeader;
}
export declare class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest extends SpeakeasyBase {
    pathParams: FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams;
    security: FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity;
}
export declare class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse extends SpeakeasyBase {
    configIssues?: shared.ConfigIssue[];
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
