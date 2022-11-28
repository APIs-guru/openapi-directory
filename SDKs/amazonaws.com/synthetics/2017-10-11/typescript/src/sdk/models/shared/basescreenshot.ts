import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BaseScreenshot
/** 
 * A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.
**/
export class BaseScreenshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IgnoreCoordinates" })
  ignoreCoordinates?: string[];

  @SpeakeasyMetadata({ data: "json, name=ScreenshotName" })
  screenshotName: string;
}
