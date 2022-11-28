import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BaseScreenshot } from "./basescreenshot";



// VisualReferenceOutput
/** 
 * <p>If this canary performs visual monitoring by comparing screenshots, this structure contains the ID of the canary run that is used as the baseline for screenshots, and the coordinates of any parts of those screenshots that are ignored during visual monitoring comparison.</p> <p>Visual monitoring is supported only on canaries running the <b>syn-puppeteer-node-3.2</b> runtime or later.</p>
**/
export class VisualReferenceOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BaseCanaryRunId" })
  baseCanaryRunId?: string;

  @SpeakeasyMetadata({ data: "json, name=BaseScreenshots", elemType: BaseScreenshot })
  baseScreenshots?: BaseScreenshot[];
}
