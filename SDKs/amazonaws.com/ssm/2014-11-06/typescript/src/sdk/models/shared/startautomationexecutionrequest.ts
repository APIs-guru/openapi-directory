import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExecutionModeEnum } from "./executionmodeenum";
import { Tag } from "./tag";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";


export class StartAutomationExecutionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=DocumentName" })
  documentName: string;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @Metadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @Metadata({ data: "json, name=Mode" })
  mode?: ExecutionModeEnum;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TargetLocations", elemType: shared.TargetLocation })
  targetLocations?: TargetLocation[];

  @Metadata({ data: "json, name=TargetMaps" })
  targetMaps?: Map<string, string[]>[];

  @Metadata({ data: "json, name=TargetParameterName" })
  targetParameterName?: string;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: Target[];
}
