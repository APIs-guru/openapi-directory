import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";



// Comment
/** 
 * Node comment information
**/
export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @SpeakeasyMetadata({ data: "json, name=createdBy" })
  createdBy: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isChanged" })
  isChanged: boolean;

  @SpeakeasyMetadata({ data: "json, name=isDeleted" })
  isDeleted: boolean;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=updatedBy" })
  updatedBy: UserInfo;
}
