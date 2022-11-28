import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListDelegatedAdministratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ServicePrincipal" })
  servicePrincipal?: string;
}
