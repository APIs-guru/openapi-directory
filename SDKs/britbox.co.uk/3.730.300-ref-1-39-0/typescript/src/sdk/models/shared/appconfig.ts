import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Classification } from "./classification";
import { AppConfigDisplay } from "./appconfigdisplay";
import { AppConfigGeneral } from "./appconfiggeneral";
import { AppConfigI18n } from "./appconfigi18n";
import { AppConfigLinear } from "./appconfiglinear";
import { Navigation } from "./navigation";
import { AppConfigPlayback } from "./appconfigplayback";
import { PageSummary } from "./pagesummary";
import { AppConfigSubscription } from "./appconfigsubscription";



export class AppConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=classification", elemType: Classification })
  classification?: Map<string, Classification>;

  @SpeakeasyMetadata({ data: "json, name=display" })
  display?: AppConfigDisplay;

  @SpeakeasyMetadata({ data: "json, name=general" })
  general?: AppConfigGeneral;

  @SpeakeasyMetadata({ data: "json, name=i18n" })
  i18n?: AppConfigI18n;

  @SpeakeasyMetadata({ data: "json, name=linear" })
  linear?: AppConfigLinear;

  @SpeakeasyMetadata({ data: "json, name=navigation" })
  navigation?: Navigation;

  @SpeakeasyMetadata({ data: "json, name=playback" })
  playback?: AppConfigPlayback;

  @SpeakeasyMetadata({ data: "json, name=sitemap", elemType: PageSummary })
  sitemap?: PageSummary[];

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: AppConfigSubscription;
}
