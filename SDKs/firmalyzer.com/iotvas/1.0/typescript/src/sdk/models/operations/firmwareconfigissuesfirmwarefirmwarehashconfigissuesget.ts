import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams;

  @Metadata()
  security: FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity;
}


export class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.ConfigIssue })
  configIssues?: shared.ConfigIssue[];

  @Metadata()
  contentType: string;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
