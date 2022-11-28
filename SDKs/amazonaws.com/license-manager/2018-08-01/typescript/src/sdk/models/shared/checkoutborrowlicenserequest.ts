import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { DigitalSignatureMethodEnum } from "./digitalsignaturemethodenum";
import { EntitlementData } from "./entitlementdata";



export class CheckoutBorrowLicenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CheckoutMetadata", elemType: Metadata })
  checkoutMetadata?: Metadata[];

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=DigitalSignatureMethod" })
  digitalSignatureMethod: DigitalSignatureMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=Entitlements", elemType: EntitlementData })
  entitlements: EntitlementData[];

  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @SpeakeasyMetadata({ data: "json, name=NodeId" })
  nodeId?: string;
}
