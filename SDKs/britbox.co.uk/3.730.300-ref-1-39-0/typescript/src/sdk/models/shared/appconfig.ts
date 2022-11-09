import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=classification", elemType: shared.Classification })
  classification?: Map<string, Classification>;

  @Metadata({ data: "json, name=display" })
  display?: AppConfigDisplay;

  @Metadata({ data: "json, name=general" })
  general?: AppConfigGeneral;

  @Metadata({ data: "json, name=i18n" })
  i18n?: AppConfigI18n;

  @Metadata({ data: "json, name=linear" })
  linear?: AppConfigLinear;

  @Metadata({ data: "json, name=navigation" })
  navigation?: Navigation;

  @Metadata({ data: "json, name=playback" })
  playback?: AppConfigPlayback;

  @Metadata({ data: "json, name=sitemap", elemType: shared.PageSummary })
  sitemap?: PageSummary[];

  @Metadata({ data: "json, name=subscription" })
  subscription?: AppConfigSubscription;
}
