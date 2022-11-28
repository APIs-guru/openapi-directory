import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthGetStorageLocalSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class HealthGetStorageLocalRequest extends SpeakeasyBase {
    security: HealthGetStorageLocalSecurity;
}
export declare class HealthGetStorageLocalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
