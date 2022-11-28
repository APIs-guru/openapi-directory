import { SpeakeasyBase } from "../../../internal/utils";
import { OpsMetadataFilter } from "./opsmetadatafilter";
export declare class ListOpsMetadataRequest extends SpeakeasyBase {
    filters?: OpsMetadataFilter[];
    maxResults?: number;
    nextToken?: string;
}
