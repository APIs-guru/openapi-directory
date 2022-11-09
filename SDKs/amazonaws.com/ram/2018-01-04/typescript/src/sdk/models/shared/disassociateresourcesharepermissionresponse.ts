import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateResourceSharePermissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=clientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=returnValue" })
  returnValue?: boolean;
}
