import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEAadhaarDataInXmlFormatIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetEAadhaarDataInXmlFormatIdRequest extends SpeakeasyBase {
  @Metadata()
  security: GetEAadhaarDataInXmlFormatIdSecurity;
}


export class GetEAadhaarDataInXmlFormatId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetEAadhaarDataInXmlFormatId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: any;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class GetEAadhaarDataInXmlFormatIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  getEAadhaarDataInXmlFormatId401ApplicationJsonObject?: GetEAadhaarDataInXmlFormatId401ApplicationJson;

  @Metadata()
  getEAadhaarDataInXmlFormatId404ApplicationJsonObject?: GetEAadhaarDataInXmlFormatId404ApplicationJson;

  @Metadata()
  getEAadhaarDataInXmlFormatId500ApplicationJsonOneOf?: any;

  @Metadata()
  getEAadhaarDataInXmlFormatId503ApplicationJsonOneOf?: any;

  @Metadata()
  statusCode: number;
}
