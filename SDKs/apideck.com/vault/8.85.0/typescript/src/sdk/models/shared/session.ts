import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumerMetadata } from "./consumermetadata";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";



export class SessionSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auto_redirect" })
  autoRedirect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hide_resource_settings" })
  hideResourceSettings?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isolation_mode" })
  isolationMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sandbox_mode" })
  sandboxMode?: boolean;

  @SpeakeasyMetadata({ data: "json, name=session_length" })
  sessionLength?: string;

  @SpeakeasyMetadata({ data: "json, name=show_logs" })
  showLogs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_sidebar" })
  showSidebar?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_suggestions" })
  showSuggestions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=unified_apis" })
  unifiedApis?: UnifiedApiIdEnum[];
}


export class SessionTheme extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=favicon" })
  favicon?: string;

  @SpeakeasyMetadata({ data: "json, name=primary_color" })
  primaryColor?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy_url" })
  privacyUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sidepanel_background_color" })
  sidepanelBackgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=sidepanel_text_color" })
  sidepanelTextColor?: string;

  @SpeakeasyMetadata({ data: "json, name=terms_url" })
  termsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=vault_name" })
  vaultName?: string;
}


export class Session extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumer_metadata" })
  consumerMetadata?: ConsumerMetadata;

  @SpeakeasyMetadata({ data: "json, name=custom_consumer_settings" })
  customConsumerSettings?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=redirect_uri" })
  redirectUri?: string;

  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings?: SessionSettings;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: SessionTheme;
}
