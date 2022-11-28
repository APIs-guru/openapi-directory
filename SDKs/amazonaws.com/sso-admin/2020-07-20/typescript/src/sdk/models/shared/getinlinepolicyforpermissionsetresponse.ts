import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInlinePolicyForPermissionSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InlinePolicy" })
  inlinePolicy?: string;
}
