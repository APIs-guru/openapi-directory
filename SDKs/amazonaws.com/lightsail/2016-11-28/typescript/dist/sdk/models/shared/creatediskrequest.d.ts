import { SpeakeasyBase } from "../../../internal/utils";
import { AddOnRequest } from "./addonrequest";
import { Tag } from "./tag";
export declare class CreateDiskRequest extends SpeakeasyBase {
    addOns?: AddOnRequest[];
    availabilityZone: string;
    diskName: string;
    sizeInGb: number;
    tags?: Tag[];
}
