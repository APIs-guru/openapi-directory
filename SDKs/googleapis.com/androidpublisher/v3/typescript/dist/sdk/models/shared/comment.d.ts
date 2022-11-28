import { SpeakeasyBase } from "../../../internal/utils";
import { DeveloperComment } from "./developercomment";
import { UserComment } from "./usercomment";
/**
 * An entry of conversation between user and developer.
**/
export declare class Comment extends SpeakeasyBase {
    developerComment?: DeveloperComment;
    userComment?: UserComment;
}
