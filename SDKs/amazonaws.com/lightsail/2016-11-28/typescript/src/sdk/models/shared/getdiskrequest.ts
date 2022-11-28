import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDiskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diskName" })
  diskName: string;
}
