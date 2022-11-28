import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateBackupRequest extends SpeakeasyBase {
    description?: string;
    serverName: string;
    tags?: Tag[];
}
