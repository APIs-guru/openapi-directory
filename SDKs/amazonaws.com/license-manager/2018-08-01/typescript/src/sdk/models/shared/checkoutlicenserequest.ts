import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CheckoutTypeEnum } from "./checkouttypeenum";
import { EntitlementData } from "./entitlementdata";


export class CheckoutLicenseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Beneficiary" })
  beneficiary?: string;

  @Metadata({ data: "json, name=CheckoutType" })
  checkoutType: CheckoutTypeEnum;

  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=Entitlements", elemType: shared.EntitlementData })
  entitlements: EntitlementData[];

  @Metadata({ data: "json, name=KeyFingerprint" })
  keyFingerprint: string;

  @Metadata({ data: "json, name=NodeId" })
  nodeId?: string;

  @Metadata({ data: "json, name=ProductSKU" })
  productSku: string;
}
