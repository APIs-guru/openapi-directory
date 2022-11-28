import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApi2UserInfoTinyx } from "./bigovenmodelapi2userinfotinyx";



export class BigOvenModelApi2Photo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageID" })
  imageId?: number;

  @SpeakeasyMetadata({ data: "json, name=IsPrimary" })
  isPrimary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxImageSquare" })
  maxImageSquare?: number;

  @SpeakeasyMetadata({ data: "json, name=PhotoUrl" })
  photoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApi2UserInfoTinyx;
}
