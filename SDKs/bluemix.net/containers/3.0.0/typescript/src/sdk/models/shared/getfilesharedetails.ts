import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Fileshare } from "./fileshare";
import { FileshareUsage } from "./fileshareusage";


export class GetFileshareDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=fs", elemType: shared.Fileshare })
  fs?: Fileshare[];

  @Metadata({ data: "json, name=fsUsage", elemType: shared.FileshareUsage })
  fsUsage?: FileshareUsage[];

  @Metadata({ data: "json, name=volnames" })
  volnames?: string[];
}
