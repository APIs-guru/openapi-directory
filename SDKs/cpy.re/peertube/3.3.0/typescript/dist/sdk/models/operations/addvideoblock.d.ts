import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoBlockPathParams extends SpeakeasyBase {
    id: any;
}
export declare class AddVideoBlockSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AddVideoBlockRequest extends SpeakeasyBase {
    pathParams: AddVideoBlockPathParams;
    security: AddVideoBlockSecurity;
}
export declare class AddVideoBlockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
