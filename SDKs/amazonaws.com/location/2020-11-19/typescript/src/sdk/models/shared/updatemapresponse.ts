import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMapResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MapArn" })
  mapArn: string;

  @SpeakeasyMetadata({ data: "json, name=MapName" })
  mapName: string;

  @SpeakeasyMetadata({ data: "json, name=UpdateTime" })
  updateTime: Date;
}
