import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceNameAndResourceType } from "./servicenameandresourcetype";



export class ListResourceTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceTypes", elemType: ServiceNameAndResourceType })
  resourceTypes?: ServiceNameAndResourceType[];
}
