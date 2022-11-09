import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetRandomPasswordRequest extends SpeakeasyBase {
    excludeCharacters?: string;
    excludeLowercase?: boolean;
    excludeNumbers?: boolean;
    excludePunctuation?: boolean;
    excludeUppercase?: boolean;
    includeSpace?: boolean;
    passwordLength?: number;
    requireEachIncludedType?: boolean;
}
