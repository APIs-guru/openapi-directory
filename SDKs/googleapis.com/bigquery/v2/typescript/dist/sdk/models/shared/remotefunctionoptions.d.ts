import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Options for a remote user-defined function.
**/
export declare class RemoteFunctionOptions extends SpeakeasyBase {
    connection?: string;
    endpoint?: string;
    maxBatchingRows?: string;
    userDefinedContext?: Map<string, string>;
}
