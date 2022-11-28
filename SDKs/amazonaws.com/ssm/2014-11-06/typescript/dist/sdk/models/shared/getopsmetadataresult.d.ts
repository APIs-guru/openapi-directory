import { SpeakeasyBase } from "../../../internal/utils";
import { MetadataValue } from "./metadatavalue";
export declare class GetOpsMetadataResult extends SpeakeasyBase {
    metadata?: Map<string, MetadataValue>;
    nextToken?: string;
    resourceId?: string;
}
