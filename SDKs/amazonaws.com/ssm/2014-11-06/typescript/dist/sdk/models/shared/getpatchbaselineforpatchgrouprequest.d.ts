import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystemEnum } from "./operatingsystemenum";
export declare class GetPatchBaselineForPatchGroupRequest extends SpeakeasyBase {
    operatingSystem?: OperatingSystemEnum;
    patchGroup: string;
}
