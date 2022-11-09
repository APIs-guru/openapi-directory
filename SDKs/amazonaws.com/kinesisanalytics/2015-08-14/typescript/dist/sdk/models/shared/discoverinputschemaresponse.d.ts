import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SourceSchema } from "./sourceschema";
/**
 * <p/>
**/
export declare class DiscoverInputSchemaResponse extends SpeakeasyBase {
    inputSchema?: SourceSchema;
    parsedInputRecords?: string[][];
    processedInputRecords?: string[];
    rawInputRecords?: string[];
}
