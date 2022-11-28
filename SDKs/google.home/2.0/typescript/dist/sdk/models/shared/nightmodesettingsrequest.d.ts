import { SpeakeasyBase } from "../../../internal/utils";
import { Window } from "./window";
export declare class NightModesettingsRequest extends SpeakeasyBase {
    demoToUser: boolean;
    doNotDisturb: boolean;
    enabled: boolean;
    ledBrightness: number;
    volume: number;
    windows: Window[];
}
