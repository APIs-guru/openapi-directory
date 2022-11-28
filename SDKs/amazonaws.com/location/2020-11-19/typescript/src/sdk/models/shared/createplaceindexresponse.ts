import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreatePlaceIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=IndexArn" })
  indexArn: string;

  @SpeakeasyMetadata({ data: "json, name=IndexName" })
  indexName: string;
}
