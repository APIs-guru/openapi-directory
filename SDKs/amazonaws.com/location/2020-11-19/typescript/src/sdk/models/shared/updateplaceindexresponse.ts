import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdatePlaceIndexResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=IndexArn" })
  indexArn: string;

  @Metadata({ data: "json, name=IndexName" })
  indexName: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
