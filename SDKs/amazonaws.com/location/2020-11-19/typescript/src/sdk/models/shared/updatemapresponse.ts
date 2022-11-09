import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateMapResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=MapArn" })
  mapArn: string;

  @Metadata({ data: "json, name=MapName" })
  mapName: string;

  @Metadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
