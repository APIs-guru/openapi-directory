import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutQueryDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=logGroupNames" })
  logGroupNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=queryDefinitionId" })
  queryDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString: string;
}
