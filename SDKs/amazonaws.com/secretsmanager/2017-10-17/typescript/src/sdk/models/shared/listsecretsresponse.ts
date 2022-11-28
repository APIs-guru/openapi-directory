import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecretListEntry } from "./secretlistentry";



export class ListSecretsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SecretList", elemType: SecretListEntry })
  secretList?: SecretListEntry[];
}
