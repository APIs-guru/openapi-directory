import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumerMetadata } from "./consumermetadata";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";
export declare class SessionSettings extends SpeakeasyBase {
    autoRedirect?: boolean;
    hideResourceSettings?: boolean;
    isolationMode?: boolean;
    sandboxMode?: boolean;
    sessionLength?: string;
    showLogs?: boolean;
    showSidebar?: boolean;
    showSuggestions?: boolean;
    unifiedApis?: UnifiedApiIdEnum[];
}
export declare class SessionTheme extends SpeakeasyBase {
    favicon?: string;
    primaryColor?: string;
    privacyUrl?: string;
    sidepanelBackgroundColor?: string;
    sidepanelTextColor?: string;
    termsUrl?: string;
    vaultName?: string;
}
export declare class Session extends SpeakeasyBase {
    consumerMetadata?: ConsumerMetadata;
    customConsumerSettings?: Map<string, any>;
    redirectUri?: string;
    settings?: SessionSettings;
    theme?: SessionTheme;
}
