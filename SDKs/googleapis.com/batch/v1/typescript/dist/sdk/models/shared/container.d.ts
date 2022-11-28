import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container runnable.
**/
export declare class Container extends SpeakeasyBase {
    blockExternalNetwork?: boolean;
    commands?: string[];
    entrypoint?: string;
    imageUri?: string;
    options?: string;
    password?: string;
    username?: string;
    volumes?: string[];
}
