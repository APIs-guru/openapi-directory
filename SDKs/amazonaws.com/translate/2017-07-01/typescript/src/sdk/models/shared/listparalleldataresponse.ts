import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ParallelDataProperties } from "./paralleldataproperties";


export class ListParallelDataResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ParallelDataPropertiesList", elemType: shared.ParallelDataProperties })
  parallelDataPropertiesList?: ParallelDataProperties[];
}
