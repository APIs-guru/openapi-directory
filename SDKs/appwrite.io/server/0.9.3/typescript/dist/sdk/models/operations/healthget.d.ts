import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthGetSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class HealthGetRequest extends SpeakeasyBase {
    security: HealthGetSecurity;
}
export declare class HealthGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
