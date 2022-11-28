import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateKeyPairRequest extends SpeakeasyBase {
    keyPairName: string;
    tags?: Tag[];
}
