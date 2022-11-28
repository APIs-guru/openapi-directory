import { SpeakeasyBase } from "../../../internal/utils";
import { Button } from "./button";
/**
 * Represents an option rendered to the user when a prompt is shown. It could be an image, a button, a link, or text.
**/
export declare class GenericAttachment extends SpeakeasyBase {
    attachmentLinkUrl?: string;
    buttons?: Button[];
    imageUrl?: string;
    subTitle?: string;
    title?: string;
}
