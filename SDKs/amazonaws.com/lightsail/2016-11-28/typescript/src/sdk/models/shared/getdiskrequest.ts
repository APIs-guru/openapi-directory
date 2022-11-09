import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDiskRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=diskName" })
  diskName: string;
}
