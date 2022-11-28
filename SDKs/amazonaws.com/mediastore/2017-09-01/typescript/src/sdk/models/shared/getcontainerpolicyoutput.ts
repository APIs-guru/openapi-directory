import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainerPolicyOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Policy" })
  policy: string;
}
