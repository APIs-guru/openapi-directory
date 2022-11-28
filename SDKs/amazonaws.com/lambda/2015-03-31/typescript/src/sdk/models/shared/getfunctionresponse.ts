import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FunctionCodeLocation } from "./functioncodelocation";
import { Concurrency } from "./concurrency";
import { FunctionConfiguration } from "./functionconfiguration";



export class GetFunctionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Code" })
  code?: FunctionCodeLocation;

  @SpeakeasyMetadata({ data: "json, name=Concurrency" })
  concurrency?: Concurrency;

  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration?: FunctionConfiguration;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
