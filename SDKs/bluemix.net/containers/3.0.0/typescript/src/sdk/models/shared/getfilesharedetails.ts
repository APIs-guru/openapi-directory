import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Fileshare } from "./fileshare";
import { FileshareUsage } from "./fileshareusage";



export class GetFileshareDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fs", elemType: Fileshare })
  fs?: Fileshare[];

  @SpeakeasyMetadata({ data: "json, name=fsUsage", elemType: FileshareUsage })
  fsUsage?: FileshareUsage[];

  @SpeakeasyMetadata({ data: "json, name=volnames" })
  volnames?: string[];
}
