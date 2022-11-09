import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResourceStatusEnum } from "./resourcestatusenum";


export class ApiResourceLinkedResources extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=unified_property" })
  unifiedProperty?: string;
}


export class ApiResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=linked_resources", elemType: shared.ApiResourceLinkedResources })
  linkedResources?: ApiResourceLinkedResources[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: Map<string, any>;

  @Metadata({ data: "json, name=status" })
  status?: ResourceStatusEnum;
}
