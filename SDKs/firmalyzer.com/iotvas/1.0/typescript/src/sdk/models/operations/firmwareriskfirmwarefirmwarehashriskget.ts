import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirmwareRiskFirmwareFirmwareHashRiskGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwareRiskFirmwareFirmwareHashRiskGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwareRiskFirmwareFirmwareHashRiskGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirmwareRiskFirmwareFirmwareHashRiskGetPathParams;

  @SpeakeasyMetadata()
  security: FirmwareRiskFirmwareFirmwareHashRiskGetSecurity;
}


export class FirmwareRiskFirmwareFirmwareHashRiskGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  firmwareRisk?: shared.FirmwareRisk;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;
}
