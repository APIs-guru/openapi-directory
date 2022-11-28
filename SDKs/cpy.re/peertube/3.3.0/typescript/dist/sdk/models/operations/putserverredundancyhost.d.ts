import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutServerRedundancyHostPathParams extends SpeakeasyBase {
    host: string;
}
export declare class PutServerRedundancyHostRequestBody extends SpeakeasyBase {
    redundancyAllowed: boolean;
}
export declare class PutServerRedundancyHostSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PutServerRedundancyHostRequest extends SpeakeasyBase {
    pathParams: PutServerRedundancyHostPathParams;
    request?: PutServerRedundancyHostRequestBody;
    security: PutServerRedundancyHostSecurity;
}
export declare class PutServerRedundancyHostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
