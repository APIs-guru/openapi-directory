import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Metadata } from "./metadata";
import { DigitalSignatureMethodEnum } from "./digitalsignaturemethodenum";
import { EntitlementData } from "./entitlementdata";


export class CheckoutBorrowLicenseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=CheckoutMetadata", elemType: shared.Metadata })
  checkoutMetadata?: Metadata[];

  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=DigitalSignatureMethod" })
  digitalSignatureMethod: DigitalSignatureMethodEnum;

  @Metadata({ data: "json, name=Entitlements", elemType: shared.EntitlementData })
  entitlements: EntitlementData[];

  @Metadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @Metadata({ data: "json, name=NodeId" })
  nodeId?: string;
}
