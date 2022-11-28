import { SpeakeasyBase } from "../../../internal/utils";
import { StorageClassEnum } from "./storageclassenum";
export declare class PutObjectResponse extends SpeakeasyBase {
    contentSha256?: string;
    eTag?: string;
    storageClass?: StorageClassEnum;
}
