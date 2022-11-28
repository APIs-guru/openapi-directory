import { SpeakeasyBase } from "../../../internal/utils";
import { OrganizationConfiguration } from "./organizationconfiguration";
export declare class UpdateServiceSettingsRequest extends SpeakeasyBase {
    enableCrossAccountsDiscovery?: boolean;
    organizationConfiguration?: OrganizationConfiguration;
    s3BucketArn?: string;
    snsTopicArn?: string;
}
