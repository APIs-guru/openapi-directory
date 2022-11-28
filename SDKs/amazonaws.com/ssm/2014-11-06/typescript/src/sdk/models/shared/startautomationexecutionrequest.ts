import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionModeEnum } from "./executionmodeenum";
import { Tag } from "./tag";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";



export class StartAutomationExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentName" })
  documentName: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: ExecutionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TargetLocations", elemType: TargetLocation })
  targetLocations?: TargetLocation[];

  @SpeakeasyMetadata({ data: "json, name=TargetMaps" })
  targetMaps?: Map<string, string[]>[];

  @SpeakeasyMetadata({ data: "json, name=TargetParameterName" })
  targetParameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets?: Target[];
}
