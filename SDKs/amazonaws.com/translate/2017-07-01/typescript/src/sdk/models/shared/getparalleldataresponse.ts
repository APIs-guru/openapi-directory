import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParallelDataDataLocation } from "./paralleldatadatalocation";
import { ParallelDataProperties } from "./paralleldataproperties";



export class GetParallelDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AuxiliaryDataLocation" })
  auxiliaryDataLocation?: ParallelDataDataLocation;

  @SpeakeasyMetadata({ data: "json, name=DataLocation" })
  dataLocation?: ParallelDataDataLocation;

  @SpeakeasyMetadata({ data: "json, name=LatestUpdateAttemptAuxiliaryDataLocation" })
  latestUpdateAttemptAuxiliaryDataLocation?: ParallelDataDataLocation;

  @SpeakeasyMetadata({ data: "json, name=ParallelDataProperties" })
  parallelDataProperties?: ParallelDataProperties;
}
