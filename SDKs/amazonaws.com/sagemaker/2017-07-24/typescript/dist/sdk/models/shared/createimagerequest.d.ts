import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateImageRequest extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    imageName: string;
    roleArn: string;
    tags?: Tag[];
}
