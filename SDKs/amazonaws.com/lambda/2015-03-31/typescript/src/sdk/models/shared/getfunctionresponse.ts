import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FunctionCodeLocation } from "./functioncodelocation";
import { Concurrency } from "./concurrency";
import { FunctionConfiguration } from "./functionconfiguration";


export class GetFunctionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Code" })
  code?: FunctionCodeLocation;

  @Metadata({ data: "json, name=Concurrency" })
  concurrency?: Concurrency;

  @Metadata({ data: "json, name=Configuration" })
  configuration?: FunctionConfiguration;

  @Metadata({ data: "json, name=Tags" })
  tags?: Map<string, string>;
}
