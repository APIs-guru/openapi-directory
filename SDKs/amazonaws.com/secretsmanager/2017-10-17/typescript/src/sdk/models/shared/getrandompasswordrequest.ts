import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRandomPasswordRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExcludeCharacters" })
  excludeCharacters?: string;

  @Metadata({ data: "json, name=ExcludeLowercase" })
  excludeLowercase?: boolean;

  @Metadata({ data: "json, name=ExcludeNumbers" })
  excludeNumbers?: boolean;

  @Metadata({ data: "json, name=ExcludePunctuation" })
  excludePunctuation?: boolean;

  @Metadata({ data: "json, name=ExcludeUppercase" })
  excludeUppercase?: boolean;

  @Metadata({ data: "json, name=IncludeSpace" })
  includeSpace?: boolean;

  @Metadata({ data: "json, name=PasswordLength" })
  passwordLength?: number;

  @Metadata({ data: "json, name=RequireEachIncludedType" })
  requireEachIncludedType?: boolean;
}
