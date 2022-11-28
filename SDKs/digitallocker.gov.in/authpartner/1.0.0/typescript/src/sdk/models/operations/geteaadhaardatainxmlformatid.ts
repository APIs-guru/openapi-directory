import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEAadhaarDataInXmlFormatIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetEAadhaarDataInXmlFormatId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetEAadhaarDataInXmlFormatId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: any;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class GetEAadhaarDataInXmlFormatIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetEAadhaarDataInXmlFormatIdSecurity;
}


export class GetEAadhaarDataInXmlFormatIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getEAadhaarDataInXmlFormatId401ApplicationJsonObject?: GetEAadhaarDataInXmlFormatId401ApplicationJson;

  @SpeakeasyMetadata()
  getEAadhaarDataInXmlFormatId404ApplicationJsonObject?: GetEAadhaarDataInXmlFormatId404ApplicationJson;

  @SpeakeasyMetadata()
  getEAadhaarDataInXmlFormatId500ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  getEAadhaarDataInXmlFormatId503ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
