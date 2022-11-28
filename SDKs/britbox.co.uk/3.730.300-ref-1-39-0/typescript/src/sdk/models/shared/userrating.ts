import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserRating extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemId" })
  itemId: string;

  @SpeakeasyMetadata({ data: "json, name=rating" })
  rating: number;
}
