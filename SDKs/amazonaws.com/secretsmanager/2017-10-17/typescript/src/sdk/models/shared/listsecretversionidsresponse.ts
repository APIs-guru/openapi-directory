import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecretVersionsListEntry } from "./secretversionslistentry";



export class ListSecretVersionIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Versions", elemType: SecretVersionsListEntry })
  versions?: SecretVersionsListEntry[];
}
