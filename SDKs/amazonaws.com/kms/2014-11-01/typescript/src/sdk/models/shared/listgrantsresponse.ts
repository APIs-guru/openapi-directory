import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GrantListEntry } from "./grantlistentry";



export class ListGrantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Grants", elemType: GrantListEntry })
  grants?: GrantListEntry[];

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @SpeakeasyMetadata({ data: "json, name=Truncated" })
  truncated?: boolean;
}
