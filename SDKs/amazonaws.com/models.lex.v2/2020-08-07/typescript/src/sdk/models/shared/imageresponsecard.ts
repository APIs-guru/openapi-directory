import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Button } from "./button";



// ImageResponseCard
/** 
 * <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p>
**/
export class ImageResponseCard extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buttons", elemType: Button })
  buttons?: Button[];

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;
}
