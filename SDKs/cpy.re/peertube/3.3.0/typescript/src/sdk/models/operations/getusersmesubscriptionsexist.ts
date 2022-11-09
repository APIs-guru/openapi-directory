import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersMeSubscriptionsExistQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris: string[];
}


export class GetUsersMeSubscriptionsExistSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeSubscriptionsExistRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUsersMeSubscriptionsExistQueryParams;

  @Metadata()
  security: GetUsersMeSubscriptionsExistSecurity;
}


export class GetUsersMeSubscriptionsExistResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getUsersMeSubscriptionsExist200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
