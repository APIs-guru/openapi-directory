import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { EntitlementData } from "./entitlementdata";



export class CheckoutBorrowLicenseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CheckoutMetadata", elemType: Metadata })
  checkoutMetadata?: Metadata[];

  @SpeakeasyMetadata({ data: "json, name=EntitlementsAllowed", elemType: EntitlementData })
  entitlementsAllowed?: EntitlementData[];

  @SpeakeasyMetadata({ data: "json, name=Expiration" })
  expiration?: string;

  @SpeakeasyMetadata({ data: "json, name=IssuedAt" })
  issuedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseConsumptionToken" })
  licenseConsumptionToken?: string;

  @SpeakeasyMetadata({ data: "json, name=NodeId" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=SignedToken" })
  signedToken?: string;
}
