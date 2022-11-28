import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
export declare class Review extends SpeakeasyBase {
    authorName?: string;
    comments?: Comment[];
    reviewId?: string;
}
