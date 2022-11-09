import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Describes a particular version of an API. ApiVersions are what consumers actually use.
**/
export declare class ApiVersion extends SpeakeasyBase {
    annotations?: Map<string, string>;
    createTime?: string;
    description?: string;
    displayName?: string;
    labels?: Map<string, string>;
    name?: string;
    state?: string;
    updateTime?: string;
}
