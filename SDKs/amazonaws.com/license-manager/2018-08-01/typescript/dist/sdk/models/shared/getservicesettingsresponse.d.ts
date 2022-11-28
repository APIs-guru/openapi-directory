import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConfiguration } from "./organizationconfiguration";
export declare class GetServiceSettingsResponse extends SpeakeasyBase {
    enableCrossAccountsDiscovery?: boolean;
    licenseManagerResourceShareArn?: string;
    organizationConfiguration?: OrganizationConfiguration;
    s3BucketArn?: string;
    snsTopicArn?: string;
}
