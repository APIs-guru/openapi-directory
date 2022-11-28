import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";



export class GetDomainsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domains", elemType: Domain })
  domains?: Domain[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
