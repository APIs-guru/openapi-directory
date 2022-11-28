import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumptionConfiguration } from "./consumptionconfiguration";
import { Entitlement } from "./entitlement";
import { Issuer } from "./issuer";
import { Metadata } from "./metadata";
import { LicenseStatusEnum } from "./licensestatusenum";
import { DatetimeRange } from "./datetimerange";



export class CreateLicenseVersionRequest extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseMetadata", elemType: Metadata })
  licenseMetadata?: Metadata[];

  @SpeakeasyMetadata({ data: "json, name=LicenseName" })
  licenseName: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName: string;

  @SpeakeasyMetadata({ data: "json, name=SourceVersion" })
  sourceVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: LicenseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Validity" })
  validity: DatetimeRange;
}
