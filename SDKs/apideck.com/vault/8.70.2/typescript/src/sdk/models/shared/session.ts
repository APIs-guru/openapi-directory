import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsumerMetadata } from "./consumermetadata";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";


export class SessionSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=auto_redirect" })
  autoRedirect?: boolean;

  @Metadata({ data: "json, name=hide_resource_settings" })
  hideResourceSettings?: boolean;

  @Metadata({ data: "json, name=isolation_mode" })
  isolationMode?: boolean;

  @Metadata({ data: "json, name=sandbox_mode" })
  sandboxMode?: boolean;

  @Metadata({ data: "json, name=session_length" })
  sessionLength?: string;

  @Metadata({ data: "json, name=show_logs" })
  showLogs?: boolean;

  @Metadata({ data: "json, name=show_sidebar" })
  showSidebar?: boolean;

  @Metadata({ data: "json, name=show_suggestions" })
  showSuggestions?: boolean;

  @Metadata({ data: "json, name=unified_apis" })
  unifiedApis?: UnifiedApiIdEnum[];
}


export class SessionTheme extends SpeakeasyBase {
  @Metadata({ data: "json, name=favicon" })
  favicon?: string;

  @Metadata({ data: "json, name=primary_color" })
  primaryColor?: string;

  @Metadata({ data: "json, name=privacy_url" })
  privacyUrl?: string;

  @Metadata({ data: "json, name=sidepanel_background_color" })
  sidepanelBackgroundColor?: string;

  @Metadata({ data: "json, name=sidepanel_text_color" })
  sidepanelTextColor?: string;

  @Metadata({ data: "json, name=terms_url" })
  termsUrl?: string;

  @Metadata({ data: "json, name=vault_name" })
  vaultName?: string;
}


export class Session extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumer_metadata" })
  consumerMetadata?: ConsumerMetadata;

  @Metadata({ data: "json, name=custom_consumer_settings" })
  customConsumerSettings?: Map<string, any>;

  @Metadata({ data: "json, name=redirect_uri" })
  redirectUri?: string;

  @Metadata({ data: "json, name=settings" })
  settings?: SessionSettings;

  @Metadata({ data: "json, name=theme" })
  theme?: SessionTheme;
}
