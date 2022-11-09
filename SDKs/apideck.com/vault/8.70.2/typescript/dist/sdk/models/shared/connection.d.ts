import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthTypeEnum } from "./authtypeenum";
import { FormField } from "./formfield";
import { OAuthGrantTypeEnum } from "./oauthgranttypeenum";
import { ConnectionStateEnum } from "./connectionstateenum";
export declare enum ConnectionConfigurationDefaultsTargetEnum {
    CustomFields = "custom_fields",
    Resource = "resource"
}
export declare class ConnectionConfigurationDefaults extends SpeakeasyBase {
    id?: string;
    options?: any[];
    target?: ConnectionConfigurationDefaultsTargetEnum;
    value?: any;
}
export declare class ConnectionConfiguration extends SpeakeasyBase {
    defaults?: ConnectionConfigurationDefaults[];
    resource?: string;
}
export declare enum ConnectionStatusEnum {
    Live = "live",
    Upcoming = "upcoming",
    Requested = "requested"
}
export declare class Connection extends SpeakeasyBase {
    authType?: AuthTypeEnum;
    authorizeUrl?: string;
    configurableResources?: string[];
    configuration?: ConnectionConfiguration[];
    createdAt?: number;
    enabled?: boolean;
    formFields?: FormField[];
    hasGuide?: boolean;
    icon?: string;
    id?: string;
    logo?: string;
    metadata?: Map<string, any>;
    name?: string;
    oauthGrantType?: OAuthGrantTypeEnum;
    resourceSchemaSupport?: string[];
    resourceSettingsSupport?: string[];
    revokeUrl?: string;
    serviceId?: string;
    settings?: Map<string, any>;
    settingsRequiredForAuthorization?: string[];
    state?: ConnectionStateEnum;
    status?: ConnectionStatusEnum;
    tagLine?: string;
    unifiedApi?: string;
    updatedAt?: number;
    website?: string;
}
