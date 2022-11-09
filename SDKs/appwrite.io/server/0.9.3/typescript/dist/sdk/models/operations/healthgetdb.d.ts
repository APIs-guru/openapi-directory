import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class HealthGetDbSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class HealthGetDbRequest extends SpeakeasyBase {
    security: HealthGetDbSecurity;
}
export declare class HealthGetDbResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
