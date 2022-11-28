import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetProfileRequest extends SpeakeasyBase {
    security: GetProfileSecurity;
}
export declare class GetProfileResponse extends SpeakeasyBase {
    contentType: string;
    profile?: shared.Profile;
    statusCode: number;
}
