import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Describes the mapping of each data element in the streaming source to the corresponding column in the in-application stream.</p> <p>Also used to describe the format of the reference data source.</p>
**/
export declare class RecordColumn extends SpeakeasyBase {
    mapping?: string;
    name: string;
    sqlType: string;
}
