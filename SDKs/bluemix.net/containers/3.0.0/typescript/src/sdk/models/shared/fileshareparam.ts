import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FileshareParam extends SpeakeasyBase {
  @Metadata({ data: "json, name=fsIOPS" })
  fsIops: number;

  @Metadata({ data: "json, name=fsName" })
  fsName: string;

  @Metadata({ data: "json, name=fsSize" })
  fsSize: number;
}
