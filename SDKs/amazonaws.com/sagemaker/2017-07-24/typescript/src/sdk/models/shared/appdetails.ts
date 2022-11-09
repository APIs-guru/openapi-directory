import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppTypeEnum } from "./apptypeenum";
import { AppStatusEnum } from "./appstatusenum";


// AppDetails
/** 
 * Details about an Amazon SageMaker app.
**/
export class AppDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppName" })
  appName?: string;

  @Metadata({ data: "json, name=AppType" })
  appType?: AppTypeEnum;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DomainId" })
  domainId?: string;

  @Metadata({ data: "json, name=Status" })
  status?: AppStatusEnum;

  @Metadata({ data: "json, name=UserProfileName" })
  userProfileName?: string;
}
