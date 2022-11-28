import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTagMapping } from "./resourcetagmapping";



export class GetResourcesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PaginationToken" })
  paginationToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceTagMappingList", elemType: ResourceTagMapping })
  resourceTagMappingList?: ResourceTagMapping[];
}
