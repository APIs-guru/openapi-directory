import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecretVersionsListEntry } from "./secretversionslistentry";


export class ListSecretVersionIdsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Versions", elemType: shared.SecretVersionsListEntry })
  versions?: SecretVersionsListEntry[];
}
