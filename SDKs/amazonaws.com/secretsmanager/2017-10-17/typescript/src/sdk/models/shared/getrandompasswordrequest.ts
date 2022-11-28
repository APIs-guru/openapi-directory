import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRandomPasswordRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExcludeCharacters" })
  excludeCharacters?: string;

  @SpeakeasyMetadata({ data: "json, name=ExcludeLowercase" })
  excludeLowercase?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExcludeNumbers" })
  excludeNumbers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExcludePunctuation" })
  excludePunctuation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ExcludeUppercase" })
  excludeUppercase?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IncludeSpace" })
  includeSpace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PasswordLength" })
  passwordLength?: number;

  @SpeakeasyMetadata({ data: "json, name=RequireEachIncludedType" })
  requireEachIncludedType?: boolean;
}
