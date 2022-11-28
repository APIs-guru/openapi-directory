import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParallelDataProperties } from "./paralleldataproperties";



export class ListParallelDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ParallelDataPropertiesList", elemType: ParallelDataProperties })
  parallelDataPropertiesList?: ParallelDataProperties[];
}
