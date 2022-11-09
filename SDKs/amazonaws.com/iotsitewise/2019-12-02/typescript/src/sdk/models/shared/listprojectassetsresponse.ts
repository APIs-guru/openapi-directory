import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListProjectAssetsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetIds" })
  assetIds: string[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
