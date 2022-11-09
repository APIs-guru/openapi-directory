import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BaseScreenshot } from "./basescreenshot";


// VisualReferenceOutput
/** 
 * <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates of any parts of those screenshots that are ignored during visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later.</p>
**/
export class VisualReferenceOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=BaseCanaryRunId" })
  baseCanaryRunId?: string;

  @Metadata({ data: "json, name=BaseScreenshots", elemType: shared.BaseScreenshot })
  baseScreenshots?: BaseScreenshot[];
}
