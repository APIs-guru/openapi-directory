import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";



export class Review extends SpeakeasyBase {
  @SpeakeasyMetadata()
  authorName?: string;

  @SpeakeasyMetadata({ elemType: Comment })
  comments?: Comment[];

  @SpeakeasyMetadata()
  reviewId?: string;
}
