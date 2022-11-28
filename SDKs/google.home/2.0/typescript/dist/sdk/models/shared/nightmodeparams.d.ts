import { SpeakeasyBase } from "../../../internal/utils";
import { Window } from "./window";
export declare class NightModeParams extends SpeakeasyBase {
    deviceOverrideDoNotDisturb: number;
    doNotDisturb: boolean;
    enabled: boolean;
    ledBrightness: number;
    volume: number;
    windows: Window[];
}
