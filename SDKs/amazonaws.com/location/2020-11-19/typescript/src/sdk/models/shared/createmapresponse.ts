import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreateTime" })
  createTime: Date;

  @SpeakeasyMetadata({ data: "json, name=MapArn" })
  mapArn: string;

  @SpeakeasyMetadata({ data: "json, name=MapName" })
  mapName: string;
}
