import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Target } from "./target";
export declare class CreateHomeRegionControlRequest extends SpeakeasyBase {
    dryRun?: boolean;
    homeRegion: string;
    target: Target;
}
