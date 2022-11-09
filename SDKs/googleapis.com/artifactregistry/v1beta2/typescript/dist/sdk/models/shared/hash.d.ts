import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum HashTypeEnum {
    HashTypeUnspecified = "HASH_TYPE_UNSPECIFIED",
    Sha256 = "SHA256",
    Md5 = "MD5"
}
/**
 * A hash of file content.
**/
export declare class Hash extends SpeakeasyBase {
    type?: HashTypeEnum;
    value?: string;
}
