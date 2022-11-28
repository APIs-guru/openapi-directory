import { SpeakeasyBase } from "../../../internal/utils";
import { AppLinkedAppInfo } from "./applinkedappinfo";
import { AppManualAppInfo } from "./appmanualappinfo";
/**
 * Describes an AdMob app for a specific platform (For example: Android or iOS).
**/
export declare class App extends SpeakeasyBase {
    appId?: string;
    linkedAppInfo?: AppLinkedAppInfo;
    manualAppInfo?: AppManualAppInfo;
    name?: string;
    platform?: string;
}
