import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams;

  @Metadata()
  security: FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity;
}


export class FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DefaultAccount })
  defaultAccounts?: shared.DefaultAccount[];

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
