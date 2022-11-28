import { SpeakeasyBase } from "../../../internal/utils";
import { Button } from "./button";
/**
 * <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p>
**/
export declare class ImageResponseCard extends SpeakeasyBase {
    buttons?: Button[];
    imageUrl?: string;
    subtitle?: string;
    title: string;
}
