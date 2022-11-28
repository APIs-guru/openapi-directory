import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProfileCommerceAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=postalCode" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=street" })
  street?: string[];
}


export class ProfileCommerce extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: ProfileCommerceAddress;

  @SpeakeasyMetadata({ data: "json, name=bankPaymentReference" })
  bankPaymentReference?: string;
}


export class ProfileCompany extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=taxReference" })
  taxReference?: string;
}


export class ProfileCredits extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=balance" })
  balance?: number;

  @SpeakeasyMetadata({ data: "json, name=isTransferAllowed" })
  isTransferAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;
}


export class ProfileOriginAddresses extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed" })
  allowed?: string[];

  @SpeakeasyMetadata({ data: "json, name=isFullControlAllowed" })
  isFullControlAllowed?: boolean;
}


export class ProfileQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=remaining" })
  remaining: number;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}


export class Profile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commerce" })
  commerce?: ProfileCommerce;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: ProfileCompany;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: Date;

  @SpeakeasyMetadata({ data: "json, name=credits" })
  credits: ProfileCredits;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=originAddresses" })
  originAddresses?: ProfileOriginAddresses;

  @SpeakeasyMetadata({ data: "json, name=quota" })
  quota: ProfileQuota;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
