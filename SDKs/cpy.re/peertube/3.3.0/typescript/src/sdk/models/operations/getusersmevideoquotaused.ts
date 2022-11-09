import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersMeVideoQuotaUsedSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeVideoQuotaUsedRequest extends SpeakeasyBase {
  @Metadata()
  security: GetUsersMeVideoQuotaUsedSecurity;
}


export class GetUsersMeVideoQuotaUsed200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=videoQuotaUsed" })
  videoQuotaUsed?: number;

  @Metadata({ data: "json, name=videoQuotaUsedDaily" })
  videoQuotaUsedDaily?: number;
}


export class GetUsersMeVideoQuotaUsedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getUsersMeVideoQuotaUsed200ApplicationJsonObject?: GetUsersMeVideoQuotaUsed200ApplicationJson;

  @Metadata()
  statusCode: number;
}
