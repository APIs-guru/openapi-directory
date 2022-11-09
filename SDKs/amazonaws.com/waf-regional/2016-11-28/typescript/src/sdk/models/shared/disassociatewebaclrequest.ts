import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateWebAclRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
