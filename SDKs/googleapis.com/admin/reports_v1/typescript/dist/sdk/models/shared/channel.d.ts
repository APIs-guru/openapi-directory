import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A notification channel used to watch for resource changes.
**/
export declare class Channel extends SpeakeasyBase {
    address?: string;
    expiration?: string;
    id?: string;
    kind?: string;
    params?: Map<string, string>;
    payload?: boolean;
    resourceId?: string;
    resourceUri?: string;
    token?: string;
    type?: string;
}
