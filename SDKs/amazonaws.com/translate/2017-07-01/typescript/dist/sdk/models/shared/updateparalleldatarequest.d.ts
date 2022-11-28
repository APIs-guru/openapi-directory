import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelDataConfig } from "./paralleldataconfig";
export declare class UpdateParallelDataRequest extends SpeakeasyBase {
    clientToken: string;
    description?: string;
    name: string;
    parallelDataConfig: ParallelDataConfig;
}
