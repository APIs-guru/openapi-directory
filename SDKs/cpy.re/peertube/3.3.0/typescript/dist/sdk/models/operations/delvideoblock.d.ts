import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DelVideoBlockPathParams extends SpeakeasyBase {
    id: any;
}
export declare class DelVideoBlockSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DelVideoBlockRequest extends SpeakeasyBase {
    pathParams: DelVideoBlockPathParams;
    security: DelVideoBlockSecurity;
}
export declare class DelVideoBlockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
