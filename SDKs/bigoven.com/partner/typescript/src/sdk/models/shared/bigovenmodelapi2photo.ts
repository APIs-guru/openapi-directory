import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BigOvenModelApi2UserInfoTinyx } from "./bigovenmodelapi2userinfotinyx";


export class BigOvenModelApi2Photo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Caption" })
  caption?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=ImageID" })
  imageId?: number;

  @Metadata({ data: "json, name=IsPrimary" })
  isPrimary?: boolean;

  @Metadata({ data: "json, name=MaxImageSquare" })
  maxImageSquare?: number;

  @Metadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @Metadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApi2UserInfoTinyx;
}
