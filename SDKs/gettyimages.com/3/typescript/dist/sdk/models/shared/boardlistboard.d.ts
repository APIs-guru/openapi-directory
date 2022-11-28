import { SpeakeasyBase } from "../../../internal/utils";
import { Asset } from "./asset";
export declare class BoardListBoard extends SpeakeasyBase {
    assetCount?: number;
    boardRelationship?: string;
    dateCreated?: Date;
    dateLastUpdated?: Date;
    description?: string;
    heroAsset?: Asset;
    id?: string;
    name?: string;
}
