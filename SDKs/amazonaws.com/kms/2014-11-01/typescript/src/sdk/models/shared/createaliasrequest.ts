import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAliasRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasName" })
  aliasName: string;

  @Metadata({ data: "json, name=TargetKeyId" })
  targetKeyId: string;
}
