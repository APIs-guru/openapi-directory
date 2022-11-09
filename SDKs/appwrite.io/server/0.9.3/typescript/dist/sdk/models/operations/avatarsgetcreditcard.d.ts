import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AvatarsGetCreditCardPathParams extends SpeakeasyBase {
    code: string;
}
export declare class AvatarsGetCreditCardQueryParams extends SpeakeasyBase {
    height?: number;
    quality?: number;
    width?: number;
}
export declare class AvatarsGetCreditCardSecurity extends SpeakeasyBase {
    jwt: shared.SchemeJwt;
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class AvatarsGetCreditCardRequest extends SpeakeasyBase {
    pathParams: AvatarsGetCreditCardPathParams;
    queryParams: AvatarsGetCreditCardQueryParams;
    security: AvatarsGetCreditCardSecurity;
}
export declare class AvatarsGetCreditCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
