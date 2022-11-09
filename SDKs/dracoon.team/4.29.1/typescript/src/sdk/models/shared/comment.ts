import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserInfo } from "./userinfo";
import { UserInfo } from "./userinfo";


// Comment
/** 
 * Node comment information
**/
export class Comment extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdAt" })
  createdAt: Date;

  @Metadata({ data: "json, name=createdBy" })
  createdBy: UserInfo;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isChanged" })
  isChanged: boolean;

  @Metadata({ data: "json, name=isDeleted" })
  isDeleted: boolean;

  @Metadata({ data: "json, name=text" })
  text: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt: Date;

  @Metadata({ data: "json, name=updatedBy" })
  updatedBy: UserInfo;
}
