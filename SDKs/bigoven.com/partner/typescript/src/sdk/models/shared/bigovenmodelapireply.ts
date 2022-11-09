import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BigOvenModelApiUserInfoTiny } from "./bigovenmodelapiuserinfotiny";


export class BigOvenModelApiReply extends SpeakeasyBase {
  @Metadata({ data: "json, name=Comment" })
  comment?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @Metadata({ data: "json, name=ID" })
  id?: string;

  @Metadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @Metadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApiUserInfoTiny;

  @Metadata({ data: "json, name=ReviewID" })
  reviewId?: string;
}
