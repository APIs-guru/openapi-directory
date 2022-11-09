import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePlaceIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=IndexArn" })
  indexArn: string;

  @Metadata({ data: "json, name=IndexName" })
  indexName: string;
}
