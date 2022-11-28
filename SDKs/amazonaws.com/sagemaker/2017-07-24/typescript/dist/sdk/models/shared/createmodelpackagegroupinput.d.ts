import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateModelPackageGroupInput extends SpeakeasyBase {
    modelPackageGroupDescription?: string;
    modelPackageGroupName: string;
    tags?: Tag[];
}
