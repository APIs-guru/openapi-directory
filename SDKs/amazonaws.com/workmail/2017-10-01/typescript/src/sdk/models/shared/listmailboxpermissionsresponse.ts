import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Permission } from "./permission";


export class ListMailboxPermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Permissions", elemType: shared.Permission })
  permissions?: Permission[];
}
