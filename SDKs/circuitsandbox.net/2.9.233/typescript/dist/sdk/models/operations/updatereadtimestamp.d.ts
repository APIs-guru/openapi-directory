import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateReadTimestampPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateReadTimestampRequestBody extends SpeakeasyBase {
    timestamp: Date;
}
export declare class UpdateReadTimestampSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class UpdateReadTimestampRequest extends SpeakeasyBase {
    pathParams: UpdateReadTimestampPathParams;
    request: UpdateReadTimestampRequestBody;
    security: UpdateReadTimestampSecurity;
}
export declare class UpdateReadTimestampResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
