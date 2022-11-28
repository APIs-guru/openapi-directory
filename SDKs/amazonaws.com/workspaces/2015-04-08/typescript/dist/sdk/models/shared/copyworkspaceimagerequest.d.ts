import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CopyWorkspaceImageRequest extends SpeakeasyBase {
    description?: string;
    name: string;
    sourceImageId: string;
    sourceRegion: string;
    tags?: Tag[];
}
