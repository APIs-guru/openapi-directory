import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DatasetSchemaSummary } from "./datasetschemasummary";
export declare class ListSchemasResponse extends SpeakeasyBase {
    nextToken?: string;
    schemas?: DatasetSchemaSummary[];
}
