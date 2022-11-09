import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Metadata } from "./metadata";
import { EntitlementData } from "./entitlementdata";


export class CheckoutBorrowLicenseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CheckoutMetadata", elemType: shared.Metadata })
  checkoutMetadata?: Metadata[];

  @Metadata({ data: "json, name=EntitlementsAllowed", elemType: shared.EntitlementData })
  entitlementsAllowed?: EntitlementData[];

  @Metadata({ data: "json, name=Expiration" })
  expiration?: string;

  @Metadata({ data: "json, name=IssuedAt" })
  issuedAt?: string;

  @Metadata({ data: "json, name=LicenseArn" })
  licenseArn?: string;

  @Metadata({ data: "json, name=LicenseConsumptionToken" })
  licenseConsumptionToken?: string;

  @Metadata({ data: "json, name=NodeId" })
  nodeId?: string;

  @Metadata({ data: "json, name=SignedToken" })
  signedToken?: string;
}
