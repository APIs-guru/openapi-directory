import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetStatisticsIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class GetStatisticsIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: any;

  @Metadata()
  security: GetStatisticsIdSecurity;
}


export class GetStatisticsId400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetStatisticsId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetStatisticsId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetStatisticsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStatisticsId400ApplicationJsonObject?: GetStatisticsId400ApplicationJson;

  @Metadata()
  getStatisticsId401ApplicationJsonObject?: GetStatisticsId401ApplicationJson;

  @Metadata()
  getStatisticsId500ApplicationJsonObject?: GetStatisticsId500ApplicationJson;

  @Metadata()
  getStatisticsResponse?: shared.GetStatisticsResponse;

  @Metadata()
  statusCode: number;
}
