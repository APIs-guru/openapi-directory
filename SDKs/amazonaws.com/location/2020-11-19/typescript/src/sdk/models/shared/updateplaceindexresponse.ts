import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdatePlaceIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IndexArn" })
  indexArn: string;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
