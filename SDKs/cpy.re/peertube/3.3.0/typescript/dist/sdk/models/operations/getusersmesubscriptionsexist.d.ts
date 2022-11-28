import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersMeSubscriptionsExistQueryParams extends SpeakeasyBase {
    uris: string[];
}
export declare class GetUsersMeSubscriptionsExistSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetUsersMeSubscriptionsExistRequest extends SpeakeasyBase {
    queryParams: GetUsersMeSubscriptionsExistQueryParams;
    security: GetUsersMeSubscriptionsExistSecurity;
}
export declare class GetUsersMeSubscriptionsExistResponse extends SpeakeasyBase {
    contentType: string;
    getUsersMeSubscriptionsExist200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
