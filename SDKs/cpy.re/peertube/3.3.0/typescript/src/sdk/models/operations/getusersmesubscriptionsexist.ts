import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersMeSubscriptionsExistQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris: string[];
}


export class GetUsersMeSubscriptionsExistSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetUsersMeSubscriptionsExistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUsersMeSubscriptionsExistQueryParams;

  @SpeakeasyMetadata()
  security: GetUsersMeSubscriptionsExistSecurity;
}


export class GetUsersMeSubscriptionsExistResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getUsersMeSubscriptionsExist200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
