import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LaunchDetails
/** 
 * Details about the latest launch of an application.
**/
export class LaunchDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=latestLaunchTime" })
  latestLaunchTime?: Date;

  @Metadata({ data: "json, name=stackId" })
  stackId?: string;

  @Metadata({ data: "json, name=stackName" })
  stackName?: string;
}
