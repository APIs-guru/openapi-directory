import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigOvenModelApiUserInfo } from "./bigovenmodelapiuserinfo";



export class BigOvenModelApiImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Caption" })
  caption?: string;

  @SpeakeasyMetadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageID" })
  imageId?: number;

  @SpeakeasyMetadata({ data: "json, name=ImageSquares" })
  imageSquares?: number[];

  @SpeakeasyMetadata({ data: "json, name=ImageURL" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageURL120" })
  imageUrl120?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageURL128" })
  imageUrl128?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageURL200" })
  imageUrl200?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageURL256" })
  imageUrl256?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageURL48" })
  imageUrl48?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageURL64" })
  imageUrl64?: string;

  @SpeakeasyMetadata({ data: "json, name=IsPrimary" })
  isPrimary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxImageSquare" })
  maxImageSquare?: number;

  @SpeakeasyMetadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApiUserInfo;
}
