import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BigOvenModelApiUserInfo } from "./bigovenmodelapiuserinfo";


export class BigOvenModelApiImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Caption" })
  caption?: string;

  @Metadata({ data: "json, name=CreationDate" })
  creationDate?: string;

  @Metadata({ data: "json, name=ImageID" })
  imageId?: number;

  @Metadata({ data: "json, name=ImageSquares" })
  imageSquares?: number[];

  @Metadata({ data: "json, name=ImageURL" })
  imageUrl?: string;

  @Metadata({ data: "json, name=ImageURL120" })
  imageUrl120?: string;

  @Metadata({ data: "json, name=ImageURL128" })
  imageUrl128?: string;

  @Metadata({ data: "json, name=ImageURL200" })
  imageUrl200?: string;

  @Metadata({ data: "json, name=ImageURL256" })
  imageUrl256?: string;

  @Metadata({ data: "json, name=ImageURL48" })
  imageUrl48?: string;

  @Metadata({ data: "json, name=ImageURL64" })
  imageUrl64?: string;

  @Metadata({ data: "json, name=IsPrimary" })
  isPrimary?: boolean;

  @Metadata({ data: "json, name=MaxImageSquare" })
  maxImageSquare?: number;

  @Metadata({ data: "json, name=Poster" })
  poster?: BigOvenModelApiUserInfo;
}
