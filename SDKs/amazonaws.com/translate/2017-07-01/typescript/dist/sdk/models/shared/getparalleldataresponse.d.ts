import { SpeakeasyBase } from "../../../internal/utils";
import { ParallelDataDataLocation } from "./paralleldatadatalocation";
import { ParallelDataProperties } from "./paralleldataproperties";
export declare class GetParallelDataResponse extends SpeakeasyBase {
    auxiliaryDataLocation?: ParallelDataDataLocation;
    dataLocation?: ParallelDataDataLocation;
    latestUpdateAttemptAuxiliaryDataLocation?: ParallelDataDataLocation;
    parallelDataProperties?: ParallelDataProperties;
}
