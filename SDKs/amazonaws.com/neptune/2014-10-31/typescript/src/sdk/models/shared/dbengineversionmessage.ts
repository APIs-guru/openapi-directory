import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DbEngineVersion } from "./dbengineversion";



export class DbEngineVersionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: DbEngineVersion })
  dbEngineVersions?: DbEngineVersion[];

  @SpeakeasyMetadata()
  marker?: string;
}
