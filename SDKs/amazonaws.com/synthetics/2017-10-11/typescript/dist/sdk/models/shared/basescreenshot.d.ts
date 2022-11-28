import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A structure representing a screenshot that is used as a baseline during visual monitoring comparisons made by the canary.
**/
export declare class BaseScreenshot extends SpeakeasyBase {
    ignoreCoordinates?: string[];
    screenshotName: string;
}
