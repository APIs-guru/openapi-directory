import { SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiReply } from "./bigovenmodelapireply";
import { BigOvenModelApiUserInfo } from "./bigovenmodelapiuserinfo";
export declare class BigOvenModelApiReview extends SpeakeasyBase {
    activeMinutes?: number;
    comment?: string;
    creationDate?: Date;
    featuredReply?: BigOvenModelApiReply;
    guid?: string;
    id?: string;
    lastModified?: Date;
    parentId?: number;
    poster?: BigOvenModelApiUserInfo;
    replies?: BigOvenModelApiReview[];
    replyCount?: number;
    reviewId?: number;
    starRating?: number;
    totalMinutes?: number;
}
