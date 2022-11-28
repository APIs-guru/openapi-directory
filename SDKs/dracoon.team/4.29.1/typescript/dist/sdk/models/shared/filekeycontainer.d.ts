import { SpeakeasyBase } from "../../../internal/utils";
/**
 * File key container
**/
export declare class FileKeyContainer extends SpeakeasyBase {
    iv: string;
    key: string;
    tag?: string;
    version: string;
}
