import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionKey } from "./encryptionkey";
import { ParallelDataConfig } from "./paralleldataconfig";
export declare class CreateParallelDataRequest extends SpeakeasyBase {
    clientToken: string;
    description?: string;
    encryptionKey?: EncryptionKey;
    name: string;
    parallelDataConfig: ParallelDataConfig;
}
