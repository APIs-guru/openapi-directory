import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppTypeEnum } from "./apptypeenum";
import { AppStatusEnum } from "./appstatusenum";



// AppDetails
/** 
 * Details about an Amazon SageMaker app.
**/
export class AppDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AppName" })
  appName?: string;

  @SpeakeasyMetadata({ data: "json, name=AppType" })
  appType?: AppTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DomainId" })
  domainId?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: AppStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=UserProfileName" })
  userProfileName?: string;
}
