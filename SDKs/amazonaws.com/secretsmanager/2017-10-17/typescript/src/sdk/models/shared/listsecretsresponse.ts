import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecretListEntry } from "./secretlistentry";


export class ListSecretsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SecretList", elemType: shared.SecretListEntry })
  secretList?: SecretListEntry[];
}
