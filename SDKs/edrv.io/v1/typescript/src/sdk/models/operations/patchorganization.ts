import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchOrganizationRequestBodyAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=streetAndNumber" })
  streetAndNumber?: string;
}


export class PatchOrganizationRequestBodyChannels extends SpeakeasyBase {
  @Metadata({ data: "json, name=slack" })
  slack?: Map<string, any>;

  @Metadata({ data: "json, name=telegram" })
  telegram?: Map<string, any>;
}


export class PatchOrganizationRequestBodyConfigurations extends SpeakeasyBase {
  @Metadata({ data: "json, name=basicAuthEnabled" })
  basicAuthEnabled?: boolean;

  @Metadata({ data: "json, name=basicAuthPassword" })
  basicAuthPassword?: boolean;
}


export class PatchOrganizationRequestBodyLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=about" })
  about?: string;

  @Metadata({ data: "json, name=contact" })
  contact?: string;

  @Metadata({ data: "json, name=privacy" })
  privacy?: string;

  @Metadata({ data: "json, name=support" })
  support?: string;
}


export class PatchOrganizationRequestBodySupportChat extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class PatchOrganizationRequestBodySupport extends SpeakeasyBase {
  @Metadata({ data: "json, name=business_hours" })
  businessHours?: string;

  @Metadata({ data: "json, name=chat" })
  chat?: PatchOrganizationRequestBodySupportChat;

  @Metadata({ data: "json, name=contact_number" })
  contactNumber?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;
}


export class PatchOrganizationRequestBodySupportChat1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class PatchOrganizationRequestBodyThemeColors extends SpeakeasyBase {
  @Metadata({ data: "json, name=primary" })
  primary?: string;

  @Metadata({ data: "json, name=secondary" })
  secondary?: string;
}


export class PatchOrganizationRequestBodyTheme extends SpeakeasyBase {
  @Metadata({ data: "json, name=colors" })
  colors?: PatchOrganizationRequestBodyThemeColors;
}


export class PatchOrganizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=address" })
  address?: PatchOrganizationRequestBodyAddress;

  @Metadata({ data: "json, name=channels" })
  channels?: PatchOrganizationRequestBodyChannels;

  @Metadata({ data: "json, name=configurations" })
  configurations?: PatchOrganizationRequestBodyConfigurations;

  @Metadata({ data: "json, name=links" })
  links?: PatchOrganizationRequestBodyLinks;

  @Metadata({ data: "json, name=locations" })
  locations?: any[];

  @Metadata({ data: "json, name=logo" })
  logo?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=otp" })
  otp?: string;

  @Metadata({ data: "json, name=stripe_connected_account_id" })
  stripeConnectedAccountId?: string;

  @Metadata({ data: "json, name=stripe_country" })
  stripeCountry?: string;

  @Metadata({ data: "json, name=stripe_currency" })
  stripeCurrency?: string;

  @Metadata({ data: "json, name=stripe_reserve_amount" })
  stripeReserveAmount?: number;

  @Metadata({ data: "json, name=support" })
  support?: PatchOrganizationRequestBodySupport;

  @Metadata({ data: "json, name=supportChat" })
  supportChat?: PatchOrganizationRequestBodySupportChat1;

  @Metadata({ data: "json, name=theme" })
  theme?: PatchOrganizationRequestBodyTheme;
}


export class PatchOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchOrganizationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PatchOrganizationRequestBody;
}


export class PatchOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
