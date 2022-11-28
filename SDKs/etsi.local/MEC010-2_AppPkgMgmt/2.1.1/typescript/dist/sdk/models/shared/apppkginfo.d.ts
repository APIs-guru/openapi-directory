import { SpeakeasyBase } from "../../../internal/utils";
import { AppPkgInfoLinks } from "./apppkginfolinks";
import { Checksum } from "./checksum";
import { OnboardingStateEnum } from "./onboardingstateenum";
import { AppPkgOperationalStateEnum } from "./apppkgoperationalstateenum";
import { UsageStateEnum } from "./usagestateenum";
/**
 * 'The data type AppPkgInfo represents the parameters for an application package resource'
**/
export declare class AppPkgInfo extends SpeakeasyBase {
    links: AppPkgInfoLinks;
    additionalArtifacts?: any;
    appDId: string;
    appDVersion: string;
    appName: string;
    appProvider?: string;
    appSoftwareVersion: string;
    checksum: Checksum;
    id: string;
    onboardingState: OnboardingStateEnum;
    operationalState: AppPkgOperationalStateEnum;
    softwareImages: any;
    usageState: UsageStateEnum;
    userDefinedData?: Map<string, any>;
}
