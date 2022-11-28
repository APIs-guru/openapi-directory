import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams;

  @SpeakeasyMetadata()
  security: FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity;
}


export class FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.DefaultAccount })
  defaultAccounts?: shared.DefaultAccount[];

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
