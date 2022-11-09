import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Asset } from "./asset";
import { Links } from "./links";
import { BoardPermissions } from "./boardpermissions";
export declare class BoardDetail extends SpeakeasyBase {
    assetCount?: number;
    assets?: Asset[];
    commentCount?: number;
    dateCreated?: Date;
    dateLastUpdated?: Date;
    description?: string;
    id?: string;
    links?: Links;
    name?: string;
    permissions?: BoardPermissions;
}
