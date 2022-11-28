import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataValue } from "./metadatavalue";
import { Tag } from "./tag";
export declare class CreateOpsMetadataRequest extends SpeakeasyBase {
    metadata?: Map<string, MetadataValue>;
    resourceId: string;
    tags?: Tag[];
}
