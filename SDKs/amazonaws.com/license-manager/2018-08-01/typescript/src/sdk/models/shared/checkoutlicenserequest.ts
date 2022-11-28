import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CheckoutTypeEnum } from "./checkouttypeenum";
import { EntitlementData } from "./entitlementdata";



export class CheckoutLicenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Beneficiary" })
  beneficiary?: string;

  @SpeakeasyMetadata({ data: "json, name=CheckoutType" })
  checkoutType: CheckoutTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=Entitlements", elemType: EntitlementData })
  entitlements: EntitlementData[];

  @SpeakeasyMetadata({ data: "json, name=KeyFingerprint" })
  keyFingerprint: string;

  @SpeakeasyMetadata({ data: "json, name=NodeId" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductSKU" })
  productSku: string;
}
