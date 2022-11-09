import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BigOvenModelApiReply } from "./bigovenmodelapireply";
import { BigOvenModelApiUserInfo } from "./bigovenmodelapiuserinfo";
import { BigOvenModelApiReview } from "./bigovenmodelapireview";


export class BigOvenModelApiReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActiveMinutes" })
  activeMinutes?: number;

  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=FeaturedReply" })
  featuredReply?: BigOvenModelApiReply;

  @Metadata({ data: "json, name=GUID" })
  guid?: string;

  @Metadata({ data: "json, name=ID" })
  id?: string;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=ParentID" })
  parentId?: number;

  @Metadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApiUserInfo;

  @Metadata({ data: "json, name=Replies", elemType: shared.BigOvenModelApiReview })
  replies?: BigOvenModelApiReview[];

  @Metadata({ data: "json, name=ReplyCount" })
  replyCount?: number;

  @Metadata({ data: "json, name=ReviewID" })
  reviewId?: number;

  @Metadata({ data: "json, name=StarRating" })
  starRating?: number;

  @Metadata({ data: "json, name=TotalMinutes" })
  totalMinutes?: number;
}
