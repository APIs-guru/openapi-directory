import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class HealthGetCacheSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class HealthGetCacheRequest extends SpeakeasyBase {
    security: HealthGetCacheSecurity;
}
export declare class HealthGetCacheResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
