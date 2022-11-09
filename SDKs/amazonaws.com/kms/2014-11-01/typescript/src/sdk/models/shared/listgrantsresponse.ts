import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GrantListEntry } from "./grantlistentry";


export class ListGrantsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Grants", elemType: shared.GrantListEntry })
  grants?: GrantListEntry[];

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=Truncated" })
  truncated?: boolean;
}
