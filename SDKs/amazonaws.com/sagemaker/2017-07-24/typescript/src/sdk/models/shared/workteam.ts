import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberDefinition } from "./memberdefinition";
import { NotificationConfiguration } from "./notificationconfiguration";



// Workteam
/** 
 * Provides details about a labeling work team.
**/
export class Workteam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=MemberDefinitions", elemType: MemberDefinition })
  memberDefinitions: MemberDefinition[];

  @SpeakeasyMetadata({ data: "json, name=NotificationConfiguration" })
  notificationConfiguration?: NotificationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=ProductListingIds" })
  productListingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=SubDomain" })
  subDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkforceArn" })
  workforceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;

  @SpeakeasyMetadata({ data: "json, name=WorkteamName" })
  workteamName: string;
}
