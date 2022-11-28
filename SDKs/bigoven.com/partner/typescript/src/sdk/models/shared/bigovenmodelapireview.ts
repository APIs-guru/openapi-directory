import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiReply } from "./bigovenmodelapireply";
import { BigOvenModelApiUserInfo } from "./bigovenmodelapiuserinfo";



export class BigOvenModelApiReview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActiveMinutes" })
  activeMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=FeaturedReply" })
  featuredReply?: BigOvenModelApiReply;

  @SpeakeasyMetadata({ data: "json, name=GUID" })
  guid?: string;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=ParentID" })
  parentId?: number;

  @SpeakeasyMetadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApiUserInfo;

  @SpeakeasyMetadata({ data: "json, name=Replies", elemType: BigOvenModelApiReview })
  replies?: BigOvenModelApiReview[];

  @SpeakeasyMetadata({ data: "json, name=ReplyCount" })
  replyCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ReviewID" })
  reviewId?: number;

  @SpeakeasyMetadata({ data: "json, name=StarRating" })
  starRating?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalMinutes" })
  totalMinutes?: number;
}
