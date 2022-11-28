import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LaunchDetails
/** 
 * Details about the latest launch of an application.
**/
export class LaunchDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latestLaunchTime" })
  latestLaunchTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=stackId" })
  stackId?: string;

  @SpeakeasyMetadata({ data: "json, name=stackName" })
  stackName?: string;
}
