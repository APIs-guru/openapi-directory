import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumptionConfiguration } from "./consumptionconfiguration";
import { Entitlement } from "./entitlement";
import { IssuerDetails } from "./issuerdetails";
import { Metadata } from "./metadata";
import { LicenseStatusEnum } from "./licensestatusenum";
import { DatetimeRange } from "./datetimerange";
/**
 * Software license that is managed in AWS License Manager.
**/
export declare class License extends SpeakeasyBase {
    beneficiary?: string;
    consumptionConfiguration?: ConsumptionConfiguration;
    createTime?: string;
    entitlements?: Entitlement[];
    homeRegion?: string;
    issuer?: IssuerDetails;
    licenseArn?: string;
    licenseMetadata?: Metadata[];
    licenseName?: string;
    productName?: string;
    productSku?: string;
    status?: LicenseStatusEnum;
    validity?: DatetimeRange;
    version?: string;
}
