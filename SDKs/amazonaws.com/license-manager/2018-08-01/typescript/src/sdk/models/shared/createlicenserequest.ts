import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumptionConfiguration } from "./consumptionconfiguration";
import { Entitlement } from "./entitlement";
import { Issuer } from "./issuer";
import { Metadata } from "./metadata";
import { DatetimeRange } from "./datetimerange";



export class CreateLicenseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Beneficiary" })
  beneficiary: string;

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @SpeakeasyMetadata({ data: "json, name=ConsumptionConfiguration" })
  consumptionConfiguration: ConsumptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Entitlements", elemType: Entitlement })
  entitlements: Entitlement[];

  @SpeakeasyMetadata({ data: "json, name=HomeRegion" })
  homeRegion: string;

  @SpeakeasyMetadata({ data: "json, name=Issuer" })
  issuer: Issuer;

  @SpeakeasyMetadata({ data: "json, name=LicenseMetadata", elemType: Metadata })
  licenseMetadata?: Metadata[];

  @SpeakeasyMetadata({ data: "json, name=LicenseName" })
  licenseName: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName: string;

  @SpeakeasyMetadata({ data: "json, name=ProductSKU" })
  productSku: string;

  @SpeakeasyMetadata({ data: "json, name=Validity" })
  validity: DatetimeRange;
}
