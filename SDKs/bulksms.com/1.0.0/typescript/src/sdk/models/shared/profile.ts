import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProfileCommerceAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=street" })
  street?: string[];
}


export class ProfileCommerce extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: ProfileCommerceAddress;

  @Metadata({ data: "json, name=bankPaymentReference" })
  bankPaymentReference?: string;
}


export class ProfileCompany extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=taxReference" })
  taxReference?: string;
}


export class ProfileCredits extends SpeakeasyBase {
  @Metadata({ data: "json, name=balance" })
  balance?: number;

  @Metadata({ data: "json, name=isTransferAllowed" })
  isTransferAllowed?: boolean;

  @Metadata({ data: "json, name=limit" })
  limit?: number;
}


export class ProfileOriginAddresses extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed" })
  allowed?: string[];

  @Metadata({ data: "json, name=isFullControlAllowed" })
  isFullControlAllowed?: boolean;
}


export class ProfileQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=remaining" })
  remaining: number;

  @Metadata({ data: "json, name=size" })
  size: number;
}


export class Profile extends SpeakeasyBase {
  @Metadata({ data: "json, name=commerce" })
  commerce?: ProfileCommerce;

  @Metadata({ data: "json, name=company" })
  company?: ProfileCompany;

  @Metadata({ data: "json, name=created" })
  created: Date;

  @Metadata({ data: "json, name=credits" })
  credits: ProfileCredits;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=originAddresses" })
  originAddresses?: ProfileOriginAddresses;

  @Metadata({ data: "json, name=quota" })
  quota: ProfileQuota;

  @Metadata({ data: "json, name=username" })
  username: string;
}
