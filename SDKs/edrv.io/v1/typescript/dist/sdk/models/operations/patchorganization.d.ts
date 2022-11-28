import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatchOrganizationPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchOrganizationRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    country?: string;
    postalCode?: string;
    streetAndNumber?: string;
}
export declare class PatchOrganizationRequestBodyChannels extends SpeakeasyBase {
    slack?: Map<string, any>;
    telegram?: Map<string, any>;
}
export declare class PatchOrganizationRequestBodyConfigurations extends SpeakeasyBase {
    basicAuthEnabled?: boolean;
    basicAuthPassword?: boolean;
}
export declare class PatchOrganizationRequestBodyLinks extends SpeakeasyBase {
    about?: string;
    contact?: string;
    privacy?: string;
    support?: string;
}
export declare class PatchOrganizationRequestBodySupportChat extends SpeakeasyBase {
    type?: string;
    value?: string;
}
export declare class PatchOrganizationRequestBodySupport extends SpeakeasyBase {
    businessHours?: string;
    chat?: PatchOrganizationRequestBodySupportChat;
    contactNumber?: string;
    email?: string;
}
export declare class PatchOrganizationRequestBodySupportChat1 extends SpeakeasyBase {
    id?: string;
    name?: string;
}
export declare class PatchOrganizationRequestBodyThemeColors extends SpeakeasyBase {
    primary?: string;
    secondary?: string;
}
export declare class PatchOrganizationRequestBodyTheme extends SpeakeasyBase {
    colors?: PatchOrganizationRequestBodyThemeColors;
}
export declare class PatchOrganizationRequestBody extends SpeakeasyBase {
    active?: boolean;
    address?: PatchOrganizationRequestBodyAddress;
    channels?: PatchOrganizationRequestBodyChannels;
    configurations?: PatchOrganizationRequestBodyConfigurations;
    links?: PatchOrganizationRequestBodyLinks;
    locations?: any[];
    logo?: string;
    name?: string;
    otp?: string;
    stripeConnectedAccountId?: string;
    stripeCountry?: string;
    stripeCurrency?: string;
    stripeReserveAmount?: number;
    support?: PatchOrganizationRequestBodySupport;
    supportChat?: PatchOrganizationRequestBodySupportChat1;
    theme?: PatchOrganizationRequestBodyTheme;
}
export declare class PatchOrganizationRequest extends SpeakeasyBase {
    pathParams: PatchOrganizationPathParams;
    request: PatchOrganizationRequestBody;
}
export declare class PatchOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
