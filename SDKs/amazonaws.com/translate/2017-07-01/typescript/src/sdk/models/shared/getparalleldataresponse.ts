import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ParallelDataDataLocation } from "./paralleldatadatalocation";
import { ParallelDataDataLocation } from "./paralleldatadatalocation";
import { ParallelDataDataLocation } from "./paralleldatadatalocation";
import { ParallelDataProperties } from "./paralleldataproperties";


export class GetParallelDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AuxiliaryDataLocation" })
  auxiliaryDataLocation?: ParallelDataDataLocation;

  @Metadata({ data: "json, name=DataLocation" })
  dataLocation?: ParallelDataDataLocation;

  @Metadata({ data: "json, name=LatestUpdateAttemptAuxiliaryDataLocation" })
  latestUpdateAttemptAuxiliaryDataLocation?: ParallelDataDataLocation;

  @Metadata({ data: "json, name=ParallelDataProperties" })
  parallelDataProperties?: ParallelDataProperties;
}
