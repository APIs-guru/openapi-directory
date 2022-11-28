import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCustomPagesHomepageInstanceRequestBody extends SpeakeasyBase {
    content?: string;
}
export declare class PutCustomPagesHomepageInstanceSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutCustomPagesHomepageInstanceRequest extends SpeakeasyBase {
    request?: PutCustomPagesHomepageInstanceRequestBody;
    security: PutCustomPagesHomepageInstanceSecurity;
}
export declare class PutCustomPagesHomepageInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
