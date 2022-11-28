import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersMeVideoQuotaUsedSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeVideoQuotaUsed200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videoQuotaUsed" })
  videoQuotaUsed?: number;

  @SpeakeasyMetadata({ data: "json, name=videoQuotaUsedDaily" })
  videoQuotaUsedDaily?: number;
}


export class GetUsersMeVideoQuotaUsedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetUsersMeVideoQuotaUsedSecurity;
}


export class GetUsersMeVideoQuotaUsedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUsersMeVideoQuotaUsed200ApplicationJsonObject?: GetUsersMeVideoQuotaUsed200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
