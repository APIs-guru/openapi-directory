import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateWebAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ResourceArn" })
  resourceArn: string;
}
