import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BaseScreenshot
/** 
 * A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.
**/
export class BaseScreenshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=IgnoreCoordinates" })
  ignoreCoordinates?: string[];

  @Metadata({ data: "json, name=ScreenshotName" })
  screenshotName: string;
}
