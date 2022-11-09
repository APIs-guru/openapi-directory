import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Output } from "./output";
export declare class AddApplicationOutputRequest extends SpeakeasyBase {
    applicationName: string;
    currentApplicationVersionId: number;
    output: Output;
}
