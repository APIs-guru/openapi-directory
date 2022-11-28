import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusEnum } from "./resourcestatusenum";



export class ApiResourceLinkedResources extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=unified_property" })
  unifiedProperty?: string;
}


export class ApiResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=linked_resources", elemType: ApiResourceLinkedResources })
  linkedResources?: ApiResourceLinkedResources[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ResourceStatusEnum;
}
