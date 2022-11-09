import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceNameAndResourceType } from "./servicenameandresourcetype";


export class ListResourceTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=resourceTypes", elemType: shared.ServiceNameAndResourceType })
  resourceTypes?: ServiceNameAndResourceType[];
}
