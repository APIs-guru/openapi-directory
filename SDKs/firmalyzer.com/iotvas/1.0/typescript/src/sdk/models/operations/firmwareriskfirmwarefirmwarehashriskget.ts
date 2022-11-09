import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirmwareRiskFirmwareFirmwareHashRiskGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=firmware_hash" })
  firmwareHash: string;
}


export class FirmwareRiskFirmwareFirmwareHashRiskGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyHeader: shared.SchemeApiKeyHeader;
}


export class FirmwareRiskFirmwareFirmwareHashRiskGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirmwareRiskFirmwareFirmwareHashRiskGetPathParams;

  @Metadata()
  security: FirmwareRiskFirmwareFirmwareHashRiskGetSecurity;
}


export class FirmwareRiskFirmwareFirmwareHashRiskGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  firmwareRisk?: shared.FirmwareRisk;

  @Metadata()
  httpValidationError?: shared.HttpValidationError;

  @Metadata()
  statusCode: number;
}
