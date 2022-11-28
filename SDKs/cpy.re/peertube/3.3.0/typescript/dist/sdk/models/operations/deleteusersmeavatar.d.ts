import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUsersMeAvatarSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteUsersMeAvatarRequest extends SpeakeasyBase {
    security: DeleteUsersMeAvatarSecurity;
}
export declare class DeleteUsersMeAvatarResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
