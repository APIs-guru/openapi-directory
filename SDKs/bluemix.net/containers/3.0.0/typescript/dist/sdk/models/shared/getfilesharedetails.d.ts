import { SpeakeasyBase } from "../../../internal/utils";
import { Fileshare } from "./fileshare";
import { FileshareUsage } from "./fileshareusage";
export declare class GetFileshareDetails extends SpeakeasyBase {
    fs?: Fileshare[];
    fsUsage?: FileshareUsage[];
    volnames?: string[];
}
