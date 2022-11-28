import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiUserInfoTiny } from "./bigovenmodelapiuserinfotiny";



export class BigOvenModelApiReply extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ID" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModified" })
  lastModified?: Date;

  @SpeakeasyMetadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApiUserInfoTiny;

  @SpeakeasyMetadata({ data: "json, name=ReviewID" })
  reviewId?: string;
}
