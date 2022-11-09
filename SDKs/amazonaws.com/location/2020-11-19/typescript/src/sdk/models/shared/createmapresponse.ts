import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateMapResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @Metadata({ data: "json, name=MapArn" })
  mapArn: string;

  @Metadata({ data: "json, name=MapName" })
  mapName: string;
}
