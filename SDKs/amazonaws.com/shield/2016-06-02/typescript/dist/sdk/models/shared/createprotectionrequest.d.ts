import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateProtectionRequest extends SpeakeasyBase {
    name: string;
    resourceArn: string;
    tags?: Tag[];
}
