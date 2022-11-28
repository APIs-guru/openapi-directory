import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataReplicationInfo } from "./datareplicationinfo";
import { LaunchedInstance } from "./launchedinstance";
import { LifeCycle } from "./lifecycle";
import { SourceProperties } from "./sourceproperties";



export class SourceServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=dataReplicationInfo" })
  dataReplicationInfo?: DataReplicationInfo;

  @SpeakeasyMetadata({ data: "json, name=isArchived" })
  isArchived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=launchedInstance" })
  launchedInstance?: LaunchedInstance;

  @SpeakeasyMetadata({ data: "json, name=lifeCycle" })
  lifeCycle?: LifeCycle;

  @SpeakeasyMetadata({ data: "json, name=sourceProperties" })
  sourceProperties?: SourceProperties;

  @SpeakeasyMetadata({ data: "json, name=sourceServerID" })
  sourceServerId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
