import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
import { PatchSetEnum } from "./patchsetenum";
import { PatchPropertyEnum } from "./patchpropertyenum";
export declare class DescribePatchPropertiesRequest extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    operatingSystem: OperatingSystemEnum;
    patchSet?: PatchSetEnum;
    property: PatchPropertyEnum;
}
