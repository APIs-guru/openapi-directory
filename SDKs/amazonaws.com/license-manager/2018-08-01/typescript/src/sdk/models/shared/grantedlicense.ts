import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumptionConfiguration } from "./consumptionconfiguration";
import { Entitlement } from "./entitlement";
import { IssuerDetails } from "./issuerdetails";
import { Metadata } from "./metadata";
import { ReceivedMetadata } from "./receivedmetadata";
import { LicenseStatusEnum } from "./licensestatusenum";
import { DatetimeRange } from "./datetimerange";



// GrantedLicense
/** 
 * Describes a license that is granted to a grantee.
**/
export class GrantedLicense extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Beneficiary" })
  beneficiary?: string;

  @SpeakeasyMetadata({ data: "json, name=ConsumptionConfiguration" })
  consumptionConfiguration?: ConsumptionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Entitlements", elemType: Entitlement })
  entitlements?: Entitlement[];

  @SpeakeasyMetadata({ data: "json, name=HomeRegion" })
  homeRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=Issuer" })
  issuer?: IssuerDetails;

  @SpeakeasyMetadata({ data: "json, name=LicenseArn" })
  licenseArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LicenseMetadata", elemType: Metadata })
  licenseMetadata?: Metadata[];

  @SpeakeasyMetadata({ data: "json, name=LicenseName" })
  licenseName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductName" })
  productName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProductSKU" })
  productSku?: string;

  @SpeakeasyMetadata({ data: "json, name=ReceivedMetadata" })
  receivedMetadata?: ReceivedMetadata;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: LicenseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Validity" })
  validity?: DatetimeRange;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: string;
}
