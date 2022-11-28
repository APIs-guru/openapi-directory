import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppPkgInfoLinks } from "./apppkginfolinks";
import { Checksum } from "./checksum";
import { OnboardingStateEnum } from "./onboardingstateenum";
import { AppPkgOperationalStateEnum } from "./apppkgoperationalstateenum";
import { UsageStateEnum } from "./usagestateenum";



// AppPkgInfo
/** 
 * 'The data type AppPkgInfo represents the parameters for an application package resource'
**/
export class AppPkgInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links: AppPkgInfoLinks;

  @SpeakeasyMetadata({ data: "json, name=additionalArtifacts" })
  additionalArtifacts?: any;

  @SpeakeasyMetadata({ data: "json, name=appDId" })
  appDId: string;

  @SpeakeasyMetadata({ data: "json, name=appDVersion" })
  appDVersion: string;

  @SpeakeasyMetadata({ data: "json, name=appName" })
  appName: string;

  @SpeakeasyMetadata({ data: "json, name=appProvider" })
  appProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=appSoftwareVersion" })
  appSoftwareVersion: string;

  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum: Checksum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=onboardingState" })
  onboardingState: OnboardingStateEnum;

  @SpeakeasyMetadata({ data: "json, name=operationalState" })
  operationalState: AppPkgOperationalStateEnum;

  @SpeakeasyMetadata({ data: "json, name=softwareImages" })
  softwareImages: any;

  @SpeakeasyMetadata({ data: "json, name=usageState" })
  usageState: UsageStateEnum;

  @SpeakeasyMetadata({ data: "json, name=userDefinedData" })
  userDefinedData?: Map<string, any>;
}
