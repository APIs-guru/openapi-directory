import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration of storage locations for the Debugger TensorBoard output data.
**/
export declare class TensorBoardOutputConfig extends SpeakeasyBase {
    localPath?: string;
    s3OutputPath: string;
}
