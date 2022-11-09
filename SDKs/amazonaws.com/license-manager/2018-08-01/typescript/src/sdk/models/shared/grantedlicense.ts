import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=Beneficiary" })
  beneficiary?: string;

  @Metadata({ data: "json, name=ConsumptionConfiguration" })
  consumptionConfiguration?: ConsumptionConfiguration;

  @Metadata({ data: "json, name=CreateTime" })
  createTime?: string;

  @Metadata({ data: "json, name=Entitlements", elemType: shared.Entitlement })
  entitlements?: Entitlement[];

  @Metadata({ data: "json, name=HomeRegion" })
  homeRegion?: string;

  @Metadata({ data: "json, name=Issuer" })
  issuer?: IssuerDetails;

  @Metadata({ data: "json, name=LicenseArn" })
  licenseArn?: string;

  @Metadata({ data: "json, name=LicenseMetadata", elemType: shared.Metadata })
  licenseMetadata?: Metadata[];

  @Metadata({ data: "json, name=LicenseName" })
  licenseName?: string;

  @Metadata({ data: "json, name=ProductName" })
  productName?: string;

  @Metadata({ data: "json, name=ProductSKU" })
  productSku?: string;

  @Metadata({ data: "json, name=ReceivedMetadata" })
  receivedMetadata?: ReceivedMetadata;

  @Metadata({ data: "json, name=Status" })
  status?: LicenseStatusEnum;

  @Metadata({ data: "json, name=Validity" })
  validity?: DatetimeRange;

  @Metadata({ data: "json, name=Version" })
  version?: string;
}
