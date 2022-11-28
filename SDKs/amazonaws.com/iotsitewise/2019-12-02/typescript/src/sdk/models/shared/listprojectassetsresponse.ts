import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListProjectAssetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetIds" })
  assetIds: string[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
