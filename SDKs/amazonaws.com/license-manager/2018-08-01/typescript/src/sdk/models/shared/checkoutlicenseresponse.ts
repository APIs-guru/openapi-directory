import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CheckoutTypeEnum } from "./checkouttypeenum";
import { EntitlementData } from "./entitlementdata";



export class CheckoutLicenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CheckoutType" })
  checkoutType?: CheckoutTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=EntitlementsAllowed", elemType: EntitlementData })
  entitlementsAllowed?: EntitlementData[];

  @SpeakeasyMetadata({ data: "json, name=Expiration" })
  expiration?: string;

  @SpeakeasyMetadata({ data: "json, name=IssuedAt" })
  issuedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseConsumptionToken" })
  licenseConsumptionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NodeId" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=SignedToken" })
  signedToken?: string;
}
