import { SpeakeasyBase } from "../../../internal/utils";
import { UserInfo } from "./userinfo";
/**
 * Node comment information
**/
export declare class Comment extends SpeakeasyBase {
    createdAt: Date;
    createdBy: UserInfo;
    id: number;
    isChanged: boolean;
    isDeleted: boolean;
    text: string;
    updatedAt: Date;
    updatedBy: UserInfo;
}
