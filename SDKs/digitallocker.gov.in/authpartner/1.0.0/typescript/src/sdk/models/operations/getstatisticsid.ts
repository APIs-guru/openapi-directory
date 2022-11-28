import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetStatisticsIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauthsecurity: shared.SchemeOauthsecurity;
}


export class GetStatisticsId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetStatisticsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetStatisticsId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetStatisticsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: any;

  @SpeakeasyMetadata()
  security: GetStatisticsIdSecurity;
}


export class GetStatisticsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getStatisticsId400ApplicationJsonObject?: GetStatisticsId400ApplicationJson;

  @SpeakeasyMetadata()
  getStatisticsId401ApplicationJsonObject?: GetStatisticsId401ApplicationJson;

  @SpeakeasyMetadata()
  getStatisticsId500ApplicationJsonObject?: GetStatisticsId500ApplicationJson;

  @SpeakeasyMetadata()
  getStatisticsResponse?: shared.GetStatisticsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
