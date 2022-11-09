import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CheckoutTypeEnum } from "./checkouttypeenum";
import { EntitlementData } from "./entitlementdata";


export class CheckoutLicenseResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CheckoutType" })
  checkoutType?: CheckoutTypeEnum;

  @Metadata({ data: "json, name=EntitlementsAllowed", elemType: shared.EntitlementData })
  entitlementsAllowed?: EntitlementData[];

  @Metadata({ data: "json, name=Expiration" })
  expiration?: string;

  @Metadata({ data: "json, name=IssuedAt" })
  issuedAt?: string;

  @Metadata({ data: "json, name=LicenseConsumptionToken" })
  licenseConsumptionToken?: string;

  @Metadata({ data: "json, name=NodeId" })
  nodeId?: string;

  @Metadata({ data: "json, name=SignedToken" })
  signedToken?: string;
}
