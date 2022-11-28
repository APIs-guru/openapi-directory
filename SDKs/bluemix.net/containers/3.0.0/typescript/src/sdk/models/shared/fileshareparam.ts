import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileshareParam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fsIOPS" })
  fsIops: number;

  @SpeakeasyMetadata({ data: "json, name=fsName" })
  fsName: string;

  @SpeakeasyMetadata({ data: "json, name=fsSize" })
  fsSize: number;
}
