import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Scim Error
**/
export declare class ScimError extends SpeakeasyBase {
    detail?: string;
    documentationUrl?: string;
    message?: string;
    schemas?: string[];
    scimType?: string;
    status?: number;
}
