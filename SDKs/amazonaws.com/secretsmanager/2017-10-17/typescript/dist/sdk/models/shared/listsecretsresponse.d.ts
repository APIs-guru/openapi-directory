import { SpeakeasyBase } from "../../../internal/utils";
import { SecretListEntry } from "./secretlistentry";
export declare class ListSecretsResponse extends SpeakeasyBase {
    nextToken?: string;
    secretList?: SecretListEntry[];
}
