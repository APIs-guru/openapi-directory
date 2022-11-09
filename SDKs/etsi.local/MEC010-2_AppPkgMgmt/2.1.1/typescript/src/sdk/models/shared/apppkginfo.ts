import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=_links" })
  links: AppPkgInfoLinks;

  @Metadata({ data: "json, name=additionalArtifacts" })
  additionalArtifacts?: any;

  @Metadata({ data: "json, name=appDId" })
  appDId: string;

  @Metadata({ data: "json, name=appDVersion" })
  appDVersion: string;

  @Metadata({ data: "json, name=appName" })
  appName: string;

  @Metadata({ data: "json, name=appProvider" })
  appProvider?: string;

  @Metadata({ data: "json, name=appSoftwareVersion" })
  appSoftwareVersion: string;

  @Metadata({ data: "json, name=checksum" })
  checksum: Checksum;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=onboardingState" })
  onboardingState: OnboardingStateEnum;

  @Metadata({ data: "json, name=operationalState" })
  operationalState: AppPkgOperationalStateEnum;

  @Metadata({ data: "json, name=softwareImages" })
  softwareImages: any;

  @Metadata({ data: "json, name=usageState" })
  usageState: UsageStateEnum;

  @Metadata({ data: "json, name=userDefinedData" })
  userDefinedData?: Map<string, any>;
}
