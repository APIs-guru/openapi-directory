import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideosOwnershipSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetVideosOwnershipRequest extends SpeakeasyBase {
    security: GetVideosOwnershipSecurity;
}
export declare class GetVideosOwnershipResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
