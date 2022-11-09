import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { App } from "./app";


// DescribeAppsResult
/** 
 * Contains the response to a <code>DescribeApps</code> request.
**/
export class DescribeAppsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Apps", elemType: shared.App })
  apps?: App[];
}
