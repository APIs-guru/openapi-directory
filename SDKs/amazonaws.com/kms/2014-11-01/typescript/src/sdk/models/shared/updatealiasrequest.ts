import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateAliasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasName" })
  aliasName: string;

  @SpeakeasyMetadata({ data: "json, name=TargetKeyId" })
  targetKeyId: string;
}
