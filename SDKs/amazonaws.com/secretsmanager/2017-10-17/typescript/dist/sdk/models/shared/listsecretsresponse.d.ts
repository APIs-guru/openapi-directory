import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SecretListEntry } from "./secretlistentry";
export declare class ListSecretsResponse extends SpeakeasyBase {
    nextToken?: string;
    secretList?: SecretListEntry[];
}
