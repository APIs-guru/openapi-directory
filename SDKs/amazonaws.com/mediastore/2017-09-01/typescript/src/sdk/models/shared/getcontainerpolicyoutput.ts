import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainerPolicyOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=Policy" })
  policy: string;
}
