import { SpeakeasyBase } from "../../../internal/utils";
import { Classification } from "./classification";
import { AppConfigDisplay } from "./appconfigdisplay";
import { AppConfigGeneral } from "./appconfiggeneral";
import { AppConfigI18n } from "./appconfigi18n";
import { AppConfigLinear } from "./appconfiglinear";
import { Navigation } from "./navigation";
import { AppConfigPlayback } from "./appconfigplayback";
import { PageSummary } from "./pagesummary";
import { AppConfigSubscription } from "./appconfigsubscription";
export declare class AppConfig extends SpeakeasyBase {
    classification?: Map<string, Classification>;
    display?: AppConfigDisplay;
    general?: AppConfigGeneral;
    i18n?: AppConfigI18n;
    linear?: AppConfigLinear;
    navigation?: Navigation;
    playback?: AppConfigPlayback;
    sitemap?: PageSummary[];
    subscription?: AppConfigSubscription;
}
