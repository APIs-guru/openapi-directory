import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MemberDefinition } from "./memberdefinition";
import { NotificationConfiguration } from "./notificationconfiguration";


// Workteam
/** 
 * Provides details about a labeling work team.
**/
export class Workteam extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateDate" })
  createDate?: Date;

  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=LastUpdatedDate" })
  lastUpdatedDate?: Date;

  @Metadata({ data: "json, name=MemberDefinitions", elemType: shared.MemberDefinition })
  memberDefinitions: MemberDefinition[];

  @Metadata({ data: "json, name=NotificationConfiguration" })
  notificationConfiguration?: NotificationConfiguration;

  @Metadata({ data: "json, name=ProductListingIds" })
  productListingIds?: string[];

  @Metadata({ data: "json, name=SubDomain" })
  subDomain?: string;

  @Metadata({ data: "json, name=WorkforceArn" })
  workforceArn?: string;

  @Metadata({ data: "json, name=WorkteamArn" })
  workteamArn: string;

  @Metadata({ data: "json, name=WorkteamName" })
  workteamName: string;
}
