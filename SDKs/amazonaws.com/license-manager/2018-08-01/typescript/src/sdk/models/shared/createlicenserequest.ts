import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsumptionConfiguration } from "./consumptionconfiguration";
import { Entitlement } from "./entitlement";
import { Issuer } from "./issuer";
import { Metadata } from "./metadata";
import { DatetimeRange } from "./datetimerange";


export class CreateLicenseRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Beneficiary" })
  beneficiary: string;

  @Metadata({ data: "json, name=ClientToken" })
  clientToken: string;

  @Metadata({ data: "json, name=ConsumptionConfiguration" })
  consumptionConfiguration: ConsumptionConfiguration;

  @Metadata({ data: "json, name=Entitlements", elemType: shared.Entitlement })
  entitlements: Entitlement[];

  @Metadata({ data: "json, name=HomeRegion" })
  homeRegion: string;

  @Metadata({ data: "json, name=Issuer" })
  issuer: Issuer;

  @Metadata({ data: "json, name=LicenseMetadata", elemType: shared.Metadata })
  licenseMetadata?: Metadata[];

  @Metadata({ data: "json, name=LicenseName" })
  licenseName: string;

  @Metadata({ data: "json, name=ProductName" })
  productName: string;

  @Metadata({ data: "json, name=ProductSKU" })
  productSku: string;

  @Metadata({ data: "json, name=Validity" })
  validity: DatetimeRange;
}
