import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceTagMapping } from "./resourcetagmapping";


export class GetResourcesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @Metadata({ data: "json, name=ResourceTagMappingList", elemType: shared.ResourceTagMapping })
  resourceTagMappingList?: ResourceTagMapping[];
}
