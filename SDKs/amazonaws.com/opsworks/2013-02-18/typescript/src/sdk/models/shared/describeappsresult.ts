import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";



// DescribeAppsResult
/** 
 * Contains the response to a <code>DescribeApps</code> request.
**/
export class DescribeAppsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Apps", elemType: App })
  apps?: App[];
}
