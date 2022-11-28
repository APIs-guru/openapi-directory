import { SpeakeasyBase } from "../../../internal/utils";
import { Hash } from "./hash";
/**
 * Files store content that is potentially associated with Packages or Versions.
**/
export declare class File extends SpeakeasyBase {
    createTime?: string;
    hashes?: Hash[];
    name?: string;
    owner?: string;
    sizeBytes?: string;
    updateTime?: string;
}
