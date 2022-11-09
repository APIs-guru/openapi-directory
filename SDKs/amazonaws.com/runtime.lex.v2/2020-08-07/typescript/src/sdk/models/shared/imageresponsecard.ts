import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Button } from "./button";


// ImageResponseCard
/** 
 * <p>A card that is shown to the user by a messaging platform. You define the contents of the card, the card is displayed by the platform. </p> <p>When you use a response card, the response from the user is constrained to the text associated with a button on the card.</p>
**/
export class ImageResponseCard extends SpeakeasyBase {
  @Metadata({ data: "json, name=buttons", elemType: shared.Button })
  buttons?: Button[];

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=subtitle" })
  subtitle?: string;

  @Metadata({ data: "json, name=title" })
  title: string;
}
