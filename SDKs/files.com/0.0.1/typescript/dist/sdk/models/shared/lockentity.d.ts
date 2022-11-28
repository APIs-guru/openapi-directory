import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Locks by path
**/
export declare class LockEntity extends SpeakeasyBase {
    allowAccessByAnyUser?: boolean;
    depth?: string;
    exclusive?: boolean;
    owner?: string;
    path?: string;
    recursive?: boolean;
    scope?: string;
    timeout?: number;
    token?: string;
    type?: string;
    userId?: number;
    username?: string;
}
