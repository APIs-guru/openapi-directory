import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DataReplicationInfo } from "./datareplicationinfo";
import { LaunchedInstance } from "./launchedinstance";
import { LifeCycle } from "./lifecycle";
import { SourceProperties } from "./sourceproperties";


export class SourceServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn?: string;

  @Metadata({ data: "json, name=dataReplicationInfo" })
  dataReplicationInfo?: DataReplicationInfo;

  @Metadata({ data: "json, name=isArchived" })
  isArchived?: boolean;

  @Metadata({ data: "json, name=launchedInstance" })
  launchedInstance?: LaunchedInstance;

  @Metadata({ data: "json, name=lifeCycle" })
  lifeCycle?: LifeCycle;

  @Metadata({ data: "json, name=sourceProperties" })
  sourceProperties?: SourceProperties;

  @Metadata({ data: "json, name=sourceServerID" })
  sourceServerId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
