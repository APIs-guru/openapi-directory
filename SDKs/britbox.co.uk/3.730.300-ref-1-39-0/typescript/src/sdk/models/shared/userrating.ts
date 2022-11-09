import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UserRating extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemId" })
  itemId: string;

  @Metadata({ data: "json, name=rating" })
  rating: number;
}
