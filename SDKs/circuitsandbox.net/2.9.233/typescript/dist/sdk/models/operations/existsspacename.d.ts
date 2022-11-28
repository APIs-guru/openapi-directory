import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExistsSpaceNamePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ExistsSpaceNameSecurity extends SpeakeasyBase {
    oauth: shared.SchemeOauth;
}
export declare class ExistsSpaceNameRequest extends SpeakeasyBase {
    pathParams: ExistsSpaceNamePathParams;
    security: ExistsSpaceNameSecurity;
}
export declare class ExistsSpaceNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
