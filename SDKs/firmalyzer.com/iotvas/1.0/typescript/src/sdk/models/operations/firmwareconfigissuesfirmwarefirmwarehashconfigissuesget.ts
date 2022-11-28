import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams;

  @SpeakeasyMetadata()
  security: FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity;
}


export class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ConfigIssue })
  configIssues?: shared.ConfigIssue[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
