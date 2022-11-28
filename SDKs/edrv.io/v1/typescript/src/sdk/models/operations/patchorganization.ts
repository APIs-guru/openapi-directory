import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchOrganizationRequestBodyAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=streetAndNumber" })
  streetAndNumber?: string;
}


export class PatchOrganizationRequestBodyChannels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=slack" })
  slack?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=telegram" })
  telegram?: Map<string, any>;
}


export class PatchOrganizationRequestBodyConfigurations extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=basicAuthEnabled" })
  basicAuthEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=basicAuthPassword" })
  basicAuthPassword?: boolean;
}


export class PatchOrganizationRequestBodyLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=about" })
  about?: string;

  @SpeakeasyMetadata({ data: "json, name=contact" })
  contact?: string;

  @SpeakeasyMetadata({ data: "json, name=privacy" })
  privacy?: string;

  @SpeakeasyMetadata({ data: "json, name=support" })
  support?: string;
}


export class PatchOrganizationRequestBodySupportChat extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class PatchOrganizationRequestBodySupport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=business_hours" })
  businessHours?: string;

  @SpeakeasyMetadata({ data: "json, name=chat" })
  chat?: PatchOrganizationRequestBodySupportChat;

  @SpeakeasyMetadata({ data: "json, name=contact_number" })
  contactNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}


export class PatchOrganizationRequestBodySupportChat1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PatchOrganizationRequestBodyThemeColors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primary" })
  primary?: string;

  @SpeakeasyMetadata({ data: "json, name=secondary" })
  secondary?: string;
}


export class PatchOrganizationRequestBodyTheme extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colors" })
  colors?: PatchOrganizationRequestBodyThemeColors;
}


export class PatchOrganizationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: PatchOrganizationRequestBodyAddress;

  @SpeakeasyMetadata({ data: "json, name=channels" })
  channels?: PatchOrganizationRequestBodyChannels;

  @SpeakeasyMetadata({ data: "json, name=configurations" })
  configurations?: PatchOrganizationRequestBodyConfigurations;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: PatchOrganizationRequestBodyLinks;

  @SpeakeasyMetadata({ data: "json, name=locations" })
  locations?: any[];

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=otp" })
  otp?: string;

  @SpeakeasyMetadata({ data: "json, name=stripe_connected_account_id" })
  stripeConnectedAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=stripe_country" })
  stripeCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=stripe_currency" })
  stripeCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=stripe_reserve_amount" })
  stripeReserveAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=support" })
  support?: PatchOrganizationRequestBodySupport;

  @SpeakeasyMetadata({ data: "json, name=supportChat" })
  supportChat?: PatchOrganizationRequestBodySupportChat1;

  @SpeakeasyMetadata({ data: "json, name=theme" })
  theme?: PatchOrganizationRequestBodyTheme;
}


export class PatchOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchOrganizationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PatchOrganizationRequestBody;
}


export class PatchOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
