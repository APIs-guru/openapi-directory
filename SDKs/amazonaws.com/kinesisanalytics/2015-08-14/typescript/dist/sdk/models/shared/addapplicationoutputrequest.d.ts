import { SpeakeasyBase } from "../../../internal/utils";
import { Output } from "./output";
/**
 * <p/>
**/
export declare class AddApplicationOutputRequest extends SpeakeasyBase {
    applicationName: string;
    currentApplicationVersionId: number;
    output: Output;
}
