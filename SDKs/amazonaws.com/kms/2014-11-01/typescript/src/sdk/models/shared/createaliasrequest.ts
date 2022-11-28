import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasName" })
  aliasName: string;

  @SpeakeasyMetadata({ data: "json, name=TargetKeyId" })
  targetKeyId: string;
}
