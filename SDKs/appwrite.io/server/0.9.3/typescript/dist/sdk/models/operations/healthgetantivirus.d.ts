import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class HealthGetAntiVirusSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class HealthGetAntiVirusRequest extends SpeakeasyBase {
    security: HealthGetAntiVirusSecurity;
}
export declare class HealthGetAntiVirusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
