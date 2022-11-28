import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class V2UpdateWelcomeBoxContentPathParams extends SpeakeasyBase {
    content: string;
    spaceId: string;
}
export declare class V2UpdateWelcomeBoxContentRequestBody extends SpeakeasyBase {
    displayWelcomeBox?: boolean;
}
export declare class V2UpdateWelcomeBoxContentSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class V2UpdateWelcomeBoxContentRequest extends SpeakeasyBase {
    pathParams: V2UpdateWelcomeBoxContentPathParams;
    request?: V2UpdateWelcomeBoxContentRequestBody;
    security: V2UpdateWelcomeBoxContentSecurity;
}
export declare class V2UpdateWelcomeBoxContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
