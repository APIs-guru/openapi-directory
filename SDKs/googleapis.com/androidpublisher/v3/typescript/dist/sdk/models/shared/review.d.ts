import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
/**
 * An Android app review.
**/
export declare class Review extends SpeakeasyBase {
    authorName?: string;
    comments?: Comment[];
    reviewId?: string;
}
