import { SpeakeasyBase } from "../../../internal/utils";
import { AccountSharingInfo } from "./accountsharinginfo";
export declare class DescribeDocumentPermissionResponse extends SpeakeasyBase {
    accountIds?: string[];
    accountSharingInfoList?: AccountSharingInfo[];
    nextToken?: string;
}
