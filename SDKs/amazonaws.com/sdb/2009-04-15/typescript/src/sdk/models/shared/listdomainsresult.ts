import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDomainsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  domainNames?: string[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
