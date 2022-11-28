import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListFindingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingIds" })
  findingIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
