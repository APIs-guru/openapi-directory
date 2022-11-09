import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInlinePolicyForPermissionSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=InlinePolicy" })
  inlinePolicy?: string;
}
