import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumptionConfiguration } from "./consumptionconfiguration";
import { Entitlement } from "./entitlement";
import { Issuer } from "./issuer";
import { Metadata } from "./metadata";
import { LicenseStatusEnum } from "./licensestatusenum";
import { DatetimeRange } from "./datetimerange";
export declare class CreateLicenseVersionRequest extends SpeakeasyBase {
    clientToken: string;
    consumptionConfiguration: ConsumptionConfiguration;
    entitlements: Entitlement[];
    homeRegion: string;
    issuer: Issuer;
    licenseArn: string;
    licenseMetadata?: Metadata[];
    licenseName: string;
    productName: string;
    sourceVersion?: string;
    status: LicenseStatusEnum;
    validity: DatetimeRange;
}
